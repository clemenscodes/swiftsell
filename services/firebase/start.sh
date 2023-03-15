#!/bin/sh

PROJECT="$1"

if [ -z "$1" ]; then
    PROJECT="demo-project"
fi

nx image firebase &&
    docker run \
        --rm \
        -d \
        -p=9000:9000 \
        -p=8080:8080 \
        -p=4000:4000 \
        -p=9099:9099 \
        -p=8085:8085 \
        -p=5001:5001 \
        -p=9199:9199 \
        --env "GCP_PROJECT=$PROJECT" \
        firebase:latest
