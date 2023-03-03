#!/bin/sh

set -e

export TF_IN_AUTOMATION=true

APP="web"
APP_DIR="apps/$APP"
PLAN="plan.tfplan"
IMAGE_COUNT_THRESHOLD=1
SHA="$(git rev-parse --short HEAD)"
PUBLIC="dist/$APP_DIR/public"
STATIC="dist/$APP_DIR/.next/static"
PURPLE="\\033[0;35m"
SET="\\033[0m\\n"

if [ -z "$1" ]; then
    echo "No configuration (development or production) was given" && exit 1
fi

deploy() {
    CONFIG="$1"

    TF_DIR="$APP_DIR/infra/$CONFIG"
    TF="terraform -chdir=$TF_DIR"

    BACKEND="$TF_DIR/backend.tf"

    PLAN_ARG="-out=$PLAN"
    INPUT_ARG="-input=false"
    LOCK_ARG="-lock=false"
    LOCK_TIMEOUT_ARG="-lock-timeout=60s"
    VAR_ARG="-var=git_commit_sha=$SHA"
    TARGET_ARG="-target=module.app"
    APPROVE_ARG="-auto-approve"

    DEFAULT_PLAN="$PLAN_ARG $INPUT_ARG $LOCK_TIMEOUT_ARG $LOCK_ARG $VAR_ARG"
    ARTIFACT_PLAN="$TARGET_ARG $DEFAULT_PLAN"
    APPLY_ARGS="$INPUT_ARG $APPROVE_ARG $LOCK_ARG $LOCK_TIMEOUT_ARG $PLAN"

    if grep -q "local" "$BACKEND"; then
        local_plan "$CONFIG"
    else
        remote_plan "$CONFIG"
    fi
    rm "$TF_DIR/$PLAN"
    # upload_assets_to_cdn
    cleanup
    # generate_cdn_dns_entry
    generate_domain_mapping_dns_entry
    update_firebase_api_key
}

local_plan() {
    CONFIG="$1"
    $TF init -upgrade
    artifact_plan
    image "$CONFIG"
    $TF init -upgrade
    default_plan
    BUCKET=$($TF output state_bucket | tr -d '"')
    sed -i "s/backend \"local\"/backend \"gcs\" {\n  bucket = \"$BUCKET\"\n}/" "$BACKEND"
    echo "Migrating state"
    echo "yes" | $TF init -upgrade -migrate-state
}

remote_plan() {
    $TF init -upgrade
    artifact_plan
    image "$CONFIG"
    $TF init -upgrade
    default_plan
}

artifact_plan() {
    TF_COMMAND="$TF plan $ARTIFACT_PLAN"
    run_tf_command
    TF_COMMAND="$TF apply $APPLY_ARGS"
    run_tf_command
}

default_plan() {
    TF_COMMAND="$TF plan $DEFAULT_PLAN"
    run_tf_command
    TF_COMMAND="$TF apply $APPLY_ARGS"
    run_tf_command
}

run_tf_command() {
    echo
    purple "$TF_COMMAND"
    echo
    eval "$TF_COMMAND"
}

image() {
    CONFIG="$1"
    REGISTRY="docker.pkg.dev"
    PROJECT=$($TF output project_id | tr -d '"')
    ARTIFACT_REGION=$($TF output artifact_region | tr -d '"')
    REPO_NAME=$($TF output repository_id | tr -d '"')
    INPUT_IMAGES="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME/$REPO_NAME"
    TAGGED_IMAGE="$INPUT_IMAGES:sha-$SHA"
    if [ -z "$CI" ]; then
        NEXT_PUBLIC_PROJECT_TYPE="$CONFIG" nx build "$APP" --skip-nx-cache
        INPUT_IMAGES="$INPUT_IMAGES" INPUT_TAGS="sha-$SHA" nx docker "$APP" --skip-nx-cache
    else
        if [ -z "$INPUT_GITHUB_TOKEN" ]; then
            echo "Missing GitHub token"
            exit 1
        fi
        NEXT_PUBLIC_PROJECT_TYPE="$CONFIG" nx build "$APP" --skip-nx-cache
        INPUT_GITHUB_TOKEN="$INPUT_GITHUB_TOKEN" INPUT_IMAGES="$INPUT_IMAGES" INPUT_TAGS="sha-$SHA" nx docker "$APP" --configuration=ci --skip-nx-cache
    fi
    docker push "$TAGGED_IMAGE"
}

purple() {
    printf "$PURPLE%s$SET" "$1"
}

cleanup() {
    purple "Cleaning up, image threshold: $IMAGE_COUNT_THRESHOLD"
    REGISTRY="docker.pkg.dev"
    PROJECT=$($TF output project_id | tr -d '"')
    ARTIFACT_REGION=$($TF output artifact_region | tr -d '"')
    REPO_NAME=$($TF output repository_id | tr -d '"')
    REPO="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME"
    IMAGE="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME/$REPO_NAME"
    TIMER_THRESHOLD=60
    START=$(date +%s)
    set +e
    while true; do
        NOW=$(date +%s)
        ELAPSED=$((NOW - START))
        if [ $ELAPSED -ge $TIMER_THRESHOLD ]; then
            purple "timer threshold exceeded, probably stuck in an infinite loop, breaking out"
            break
        fi
        IMAGES=$(gcloud artifacts docker images list "$REPO" --include-tags --sort-by=CREATE_TIME | tail -n +2)
        echo "$IMAGES"
        IMAGE_COUNT=$(echo "$IMAGES" | wc -l | tr -d ' ')
        i="$IMAGE_COUNT_THRESHOLD"
        while [ $i -lt "$IMAGE_COUNT" ]; do
            DIGEST=$(echo "$IMAGES" | sed -n "${i}p" | awk '{print $2}')
            TAG=$(echo "$IMAGES" | sed -n "${i}p" | awk '{print $3}')
            case $TAG in
            sha-*)
                purple "gcloud artifacts docker images delete $IMAGE:$TAG --delete-tags"
                RESULT="$(echo "" | gcloud artifacts docker images delete "$IMAGE:$TAG" --delete-tags)"
                echo "$RESULT"
                ;;
            *)
                purple "gcloud artifacts docker images delete $IMAGE@$DIGEST --delete-tags"
                RESULT="$(echo "" | gcloud artifacts docker images delete "$IMAGE@$DIGEST" --delete-tags)"
                echo "$RESULT"
                ;;
            esac
            i=$((i + 1))
        done
        IMAGES=$(gcloud artifacts docker images list "$REPO" --include-tags --sort-by=CREATE_TIME | tail -n +2)
        echo "$IMAGES"
        IMAGE_COUNT=$(echo "$IMAGES" | wc -l | tr -d ' ')
        if [ "$IMAGE_COUNT" -gt "$IMAGE_COUNT_THRESHOLD" ]; then
            purple "More images than threshold, running loop again"
        else
            purple "Number of images now matches threshold"
            break
        fi
    done
    set -e
}

update_firebase_api_key() {
    purple "Updating Firebase API key"
    project=$($TF output project_id | tr -d '"')
    apex=$($TF output domain | tr -d '"')
    subdomain=$($TF output cloud_run_subdomain | tr -d '"')
    domain="$subdomain.$apex"
    firebase_service="firebase.googleapis.com"
    firestore_service="firestore.googleapis.com"
    firebasestorage_service="firebasestorage.googleapis.com"

    if [ -n "$CI" ]; then
        OLD_CLOUDSDK_CORE_PROJECT=$CLOUDSDK_CORE_PROJECT
        OLD_CLOUDSDK_PROJECT=$CLOUDSDK_PROJECT
        OLD_GCLOUD_PROJECT=$GCLOUD_PROJECT
        OLD_GCP_PROJECT=$GCP_PROJECT
        OLD_GOOGLE_CLOUD_PROJECT=$GOOGLE_CLOUD_PROJECT
        purple "Setting project $project and overriding environment variables set in CI"
        export CLOUDSDK_CORE_PROJECT="$project"
        export CLOUDSDK_PROJECT="$project"
        export GCLOUD_PROJECT="$project"
        export GCP_PROJECT="$project"
        export GOOGLE_CLOUD_PROJECT="$project"
    fi

    key_id=$(gcloud alpha services api-keys list --project="$project" | grep uid | awk '{print $2}')

    gcloud alpha services api-keys update "$key_id" \
        --project="$project" \
        --allowed-referrers="$domain,$domain/*" \
        --api-target=service="$firebase_service" \
        --api-target=service="$firestore_service" \
        --api-target=service="$firebasestorage_service"

    if [ -n "$CI" ]; then
        purple "Resetting GCP environment variables"
        export CLOUDSDK_CORE_PROJECT="$OLD_CLOUDSDK_CORE_PROJECT"
        export CLOUDSDK_PROJECT="$OLD_CLOUDSDK_PROJECT"
        export GCLOUD_PROJECT="$OLD_GCLOUD_PROJECT"
        export GCP_PROJECT="$OLD_GCP_PROJECT"
        export GOOGLE_CLOUD_PROJECT="$OLD_GOOGLE_CLOUD_PROJECT"
    fi

}

upload_assets_to_cdn() {
    PROJECT_ID=$($TF output project_id | tr -d '"')
    BUCKETS="$(gsutil ls -p "$PROJECT_ID")"
    echo "Buckets: $BUCKETS"
    BUCKET="$($TF output cdn_bucket | tr -d '"')"
    echo "Bucket: $BUCKET"
    BUCKET_ADDRESS="gs://$BUCKET"
    echo "Bucket address: $BUCKET_ADDRESS"
    PUBLIC_BUCKET_ADDRESS="$BUCKET_ADDRESS/public"
    echo "Public: $PUBLIC_BUCKET_ADDRESS"
    STATIC_BUCKET_ADDRESS="$BUCKET_ADDRESS/_next/static"
    echo "Static: $STATIC_BUCKET_ADDRESS"
    upload_static
    upload_public
}

upload_static() {
    echo "Uploading static assets to $STATIC_BUCKET_ADDRESS"
    gsutil -m rsync -u -r "$STATIC" "$STATIC_BUCKET_ADDRESS"
}

upload_public() {
    echo "Uploading public assets to $PUBLIC_BUCKET_ADDRESS"
    gsutil -m rsync -u -r "$PUBLIC" "$PUBLIC_BUCKET_ADDRESS"
}

generate_cdn_dns_entry() {
    DOMAIN=$($TF output domain | tr -d '"')
    SUBDOMAIN=$($TF output cdn_subdomain | tr -d '"')
    VALUE=$($TF output ip | tr -d '"')
    echo "The following DNS entry needs to be added to the domain $DOMAIN, so that the CDN works"
    echo "Type:  A"
    echo "Host:  $SUBDOMAIN"
    echo "Value: $VALUE"
}

generate_domain_mapping_dns_entry() {
    DOMAIN=$($TF output domain | tr -d '"')
    SUBDOMAIN=$($TF output cloud_run_subdomain | tr -d '"')
    VALUE="ghs.googlehosted.com."
    echo "The following DNS entry needs to be added to the (verified!) domain $DOMAIN, so that the Cloud Run domain mapping works"
    echo "Type:  CNAME"
    echo "Host:  $SUBDOMAIN"
    echo "Value: $VALUE"
}

case "$1" in
development) deploy "$1" ;;
production) deploy "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
