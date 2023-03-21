#!/bin/sh

set -e

APP="web"
APP_DIR="apps/$APP"
ENV="$(pwd)/$APP_DIR/.env.local"
IMAGE="$APP"
TAGGED_IMAGE="$IMAGE:latest"

[ -f "$ENV" ] || { echo "$ENV does not exist" && exit 1; }

INPUT_IMAGES="$IMAGE" INPUT_TAGS="latest" nx docker "$APP" --configuration=development &&
    docker run --rm -d \
        -p 4200:4200/tcp \
        "$TAGGED_IMAGE"
