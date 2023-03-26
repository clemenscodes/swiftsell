#!/bin/sh

yarn kill

APP="web"
APP_DIR="apps/$APP"
WEB_ENV="$(pwd)/$APP_DIR/.env.local"
API_ENV="$(pwd)/apps/api/.env"
HOST="http://localhost"
NEXT_PORT=3000
NEST_PORT=5000
HASURA_PORT=9090

nx run-many --target=env --all --output-style=stream --skip-nx-cache --configuration=local

[ -f "$WEB_ENV" ] || { echo "$WEB_ENV does not exist" && exit 1; }
[ -f "$API_ENV" ] || { echo "$API_ENV does not exist" && exit 1; }

env_instruction() {
    VARIABLE="$1"
    FILE="$2"
    echo "$VARIABLE is not defined in $FILE"
    DIR=$(dirname "$FILE")
    SKELETON="$DIR/config/.env.skeleton"
    echo "Set this by replacing the dummy value in $SKELETON"
    echo "Alternatively you can also set this value in $DIR/config/.env.development"
    exit 1
}

docker compose -f apps/web/docker/docker-compose.yml up -d --remove-orphans &&
    nx seed api --skip-nx-cache --output-style=stream &&
    echo "Next.js app running on $HOST:$NEXT_PORT" &&
    echo "Nest.js app running on $HOST:$NEST_PORT" &&
    echo "Hasura running on $HOST:$HASURA_PORT" || exit 1

echo "Opening hasura console"
nx console hasura --skip-nx-cache --output-style=stream
nx export hasura --skip-nx-cache --output-style=stream
