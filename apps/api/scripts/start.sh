#!/bin/sh

APP="api"
TAG="sha-$(git rev-parse --short HEAD)"
REGISTRY="docker.pkg.dev"
PROJECT="swiftsell-development"
ARTIFACT_REGION="europe-west1"
REPO_NAME="docker"
SERVICE_NAME="api"

image() {
    CONFIG="$1"
    echo "Running in $CONFIG configuration"
    if [ -z "$SERVICE_NAME" ]; then
        SERVICE_NAME="api"
    fi
    INPUT_IMAGES="$ARTIFACT_REGION-$REGISTRY/$PROJECT/$REPO_NAME/$SERVICE_NAME"
    if [ -z "$CI" ]; then
        INPUT_TAGS=$TAG INPUT_IMAGES=$INPUT_IMAGES nx docker $APP --skip-nx-cache --configuration=production
        IMAGE="$INPUT_IMAGES:$TAG"
        echo "$IMAGE"
        docker run --rm -d -p 3000:3000/tcp "$IMAGE"
    else
        echo "In CI"
        # if [ -z "$INPUT_GITHUB_TOKEN" ]; then
        #     echo "Missing GitHub token"
        #     exit 1
        # fi
        # populate_env_configs "$CONFIG"
        # NEXT_PUBLIC_PROJECT_TYPE="$CONFIG" nx build "$APP" --skip-nx-cache --configuration="$CONFIG"
        # INPUT_GITHUB_TOKEN="$INPUT_GITHUB_TOKEN" INPUT_IMAGES="$INPUT_IMAGES" INPUT_TAGS="sha-$SHA" nx docker "$APP" --configuration=ci --skip-nx-cache
    fi
    # docker push "$TAGGED_IMAGE"
}

case "$1" in
development) image "$1" ;;
production) image "$1" ;;
*) image "development" ;;
esac
