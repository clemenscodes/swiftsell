#!/bin/sh

nx run-many --target=build --all --output-style=stream
docker compose -f apps/web/docker/docker-compose.yml up -d
