#!/bin/sh

APP="api"
IMAGE="$APP"
TAG="sha-$(git rev-parse --short HEAD)"

INPUT_TAGS=$TAG INPUT_IMAGES=$IMAGE nx docker $APP --skip-nx-cache

docker run --rm -d -p 3000:3000/tcp $IMAGE:"$TAG"
