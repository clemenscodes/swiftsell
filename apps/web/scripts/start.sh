#!/bin/sh

set -e

APP="web"
APP_DIR="apps/$APP"
ENV="$(pwd)/$APP_DIR/.env.local"
TAG="sha-$(git rev-parse --short HEAD)"
IMAGE="$APP"
TAGGED_IMAGE="$IMAGE:$TAG"

[ -f "$ENV" ] || { echo "$ENV does not exist" && exit 1; }

COOKIE_SECRET_PREVIOUS="$(grep "COOKIE_SECRET_PREVIOUS" "$ENV" | awk -F '"' '{print $2}')"
COOKIE_SECRET_CURRENT="$(grep "COOKIE_SECRET_CURRENT" "$ENV" | awk -F '"' '{print $2}')"
FIREBASE_PRIVATE_KEY="$(grep "FIREBASE_PRIVATE_KEY" "$ENV" | awk -F '=' '{print $2}')"
FIREBASE_CLIENT_EMAIL="$(grep "FIREBASE_CLIENT_EMAIL" "$ENV" | awk -F '"' '{print $2}')"

[ -n "$COOKIE_SECRET_PREVIOUS" ] || { echo "COOKIE_SECRET_PREVIOUS is not defined in $ENV" && exit 1; }
[ -n "$COOKIE_SECRET_CURRENT" ] || { echo "COOKIE_SECRET_CURRENT is not defined in $ENV" && exit 1; }
[ -n "$FIREBASE_PRIVATE_KEY" ] || { echo "FIREBASE_PRIVATE_KEY is not defined in $ENV" && exit 1; }
[ -n "$FIREBASE_CLIENT_EMAIL" ] || { echo "FIREBASE_CLIENT_EMAIL is not defined in $ENV" && exit 1; }

INPUT_IMAGES="$IMAGE" INPUT_TAGS="$TAG" nx docker "$APP" --configuration=development

docker run --rm -it \
    -p 3000:3000/tcp \
    --env COOKIE_SECRET_PREVIOUS="$COOKIE_SECRET_PREVIOUS" \
    --env COOKIE_SECRET_CURRENT="$COOKIE_SECRET_CURRENT" \
    --env FIREBASE_PRIVATE_KEY="$FIREBASE_PRIVATE_KEY" \
    --env FIREBASE_CLIENT_EMAIL="$FIREBASE_CLIENT_EMAIL" \
    "$TAGGED_IMAGE"
