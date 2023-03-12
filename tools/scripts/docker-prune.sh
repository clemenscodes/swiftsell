#!/bin/sh

containers="$(docker ps -aq)"
volumes="$(docker volume ls -q)"
images="$(docker images -aq)"

[ -n "$containers" ] && docker rm -f $containers
[ -n "$volumes" ] && docker volume rm $volumes
[ -n "$images" ] && docker rmi -f $images

docker system prune -a -f
