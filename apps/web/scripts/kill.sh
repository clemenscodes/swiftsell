#!/bin/sh

docker compose -f apps/web/docker/docker-compose.yml kill
tools/scripts/docker-prune.sh
