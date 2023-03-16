#!/bin/sh

set -e

export TF_IN_AUTOMATION=true

APP="api"
APP_DIR="apps/$APP"
PLAN="plan.tfplan"
IMAGE_COUNT_THRESHOLD=1
SHA="$(git rev-parse --short HEAD)"
PURPLE="\\033[0;35m"
SET="\\033[0m\\n"

if [ -z "$1" ]; then
    echo "No configuration (development or production) was given" && exit 1
fi

# if [ -z "$HASURA_GRAPHQL_ENDPOINT" ]; then
#     echo "HASURA_GRAPHQL_ENDPOINT is not defined" && exit 1
# fi

if [ -z "$DATABASE_URL" ]; then
    echo "DATABASE_URL is not defined" && exit 1
fi

if [ -z "$SHADOW_DATABASE_URL" ]; then
    echo "SHADOW_DATABASE_URL is not defined" && exit 1
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
    VAR_ARG="-var=git_commit_sha=$SHA -var=database_url=$DATABASE_URL -var=shadow_database_url=$SHADOW_DATABASE_URL"
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
    cleanup
    generate_domain_mapping_dns_entry
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

populate_env_configs() {
    CONFIG="$1"
    ENV_CONFIG_FILE="$APP_DIR/config/.env.$CONFIG"
    {
        echo "HASURA_GRAPHQL_ENDPOINT=\"$HASURA_GRAPHQL_ENDPOINT\""
        echo "COOKIE_SECRET_PREVIOUS=\"$($TF output cookie_secret_previous | tr -d '"')\""
        echo "COOKIE_SECRET_CURRENT=\"$($TF output cookie_secret_current | tr -d '"')\""
    } >>"$ENV_CONFIG_FILE"
    purple "generated content of $ENV_CONFIG_FILE"
}

image() {
    CONFIG="$1"
    REGISTRY="docker.pkg.dev"
    PROJECT=$($TF output project_id | tr -d '"')
    ARTIFACT_REGION=$($TF output artifact_region | tr -d '"')
    REPO_NAME=$($TF output repository_id | tr -d '"')
    SERVICE_NAME=$($TF output cloud_run_service_name | tr -d '"')
    TAG="sha-$SHA"
    if [ -z "$SERVICE_NAME" ]; then
        SERVICE_NAME="api"
    fi
    REPO="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME"
    IMAGE="$REPO/$SERVICE_NAME"
    TAGGED_IMAGE="$IMAGE:$TAG"
    if [ -z "$CI" ]; then
        NEXT_PUBLIC_PROJECT_TYPE="$CONFIG" nx build "$APP" --skip-nx-cache --configuration="$CONFIG"
        echo "Building api image"
        INPUT_IMAGES="$IMAGE" INPUT_TAGS="$TAG" nx docker "$APP" --skip-nx-cache
    else
        if [ -z "$INPUT_GITHUB_TOKEN" ]; then
            echo "Missing GitHub token"
            exit 1
        fi
        populate_env_configs "$CONFIG"
        NEXT_PUBLIC_PROJECT_TYPE="$CONFIG" nx build "$APP" --skip-nx-cache --configuration="$CONFIG"
        echo "Building api image"
        INPUT_GITHUB_TOKEN="$INPUT_GITHUB_TOKEN" INPUT_IMAGES="$IMAGE" INPUT_TAGS="$TAG" nx docker "$APP" --configuration=ci --skip-nx-cache
    fi
    echo "Pushing api image"
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
    SERVICE_NAME=$($TF output cloud_run_service_name | tr -d '"')
    if [ -z "$SERVICE_NAME" ]; then
        SERVICE_NAME="api"
    fi
    IMAGE="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME/$SERVICE_NAME"
    clean "$IMAGE"
}

clean() {
    IMAGE="$1"
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
        IMAGES=$(gcloud artifacts docker images list "$IMAGE" --include-tags --sort-by=CREATE_TIME | tail -n +2)
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
        IMAGES=$(gcloud artifacts docker images list "$IMAGE" --include-tags --sort-by=CREATE_TIME | tail -n +2)
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

generate_domain_mapping_dns_entry() {
    DOMAIN=$($TF output domain | tr -d '"')
    SUBDOMAIN=$($TF output cloud_run_subdomain | tr -d '"')
    VALUE="ghs.googlehosted.com."
    echo "The following DNS entries needs to be added to the (verified!) domain $DOMAIN, so that the Cloud Run domain mapping works"
    echo "Type:  CNAME"
    echo "Host:  $SUBDOMAIN"
    echo "Value: $VALUE"
}

case "$1" in
development) deploy "$1" ;;
production) deploy "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
