#!/bin/sh

APP="web"
APP_DIR="apps/$APP"
WEB_ENV="$(pwd)/$APP_DIR/.env.local"
API_ENV="$(pwd)/apps/api/.env"
HOST="http://localhost"
NEXT_PORT=3000
FIREBASE_UI_PORT=4000
NEST_PORT=5000
HASURA_PORT=9090

nx run-many --target=env --all --output-style=stream --skip-nx-cache

[ -f "$WEB_ENV" ] || { echo "$WEB_ENV does not exist" && exit 1; }
[ -f "$API_ENV" ] || { echo "$API_ENV does not exist" && exit 1; }

check_env() {
    FILE="$1"
    COOKIE_SECRET_PREVIOUS="$(grep "COOKIE_SECRET_PREVIOUS" "$FILE" | awk -F '"' '{print $2}')"
    COOKIE_SECRET_CURRENT="$(grep "COOKIE_SECRET_CURRENT" "$FILE" | awk -F '"' '{print $2}')"
    FIREBASE_PRIVATE_KEY="$(grep "FIREBASE_PRIVATE_KEY" "$FILE" | awk -F '=' '{print $2}')"
    FIREBASE_CLIENT_EMAIL="$(grep "FIREBASE_CLIENT_EMAIL" "$FILE" | awk -F '"' '{print $2}')"
    [ -n "$COOKIE_SECRET_PREVIOUS" ] || env_instruction "COOKIE_SECRET_PREVIOUS" "$FILE"
    [ -n "$COOKIE_SECRET_CURRENT" ] || env_instruction "COOKIE_SECRET_CURRENT" "$FILE"
    [ -n "$FIREBASE_PRIVATE_KEY" ] || env_instruction "FIREBASE_PRIVATE_KEY" "$FILE"
    [ -n "$FIREBASE_CLIENT_EMAIL" ] || env_instruction "FIREBASE_CLIENT_EMAIL" "$FILE"
}

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

check_env "$WEB_ENV"
check_env "$API_ENV"

docker compose -f apps/web/docker/docker-compose.yml up -d --remove-orphans &&
    nx seed api &&
    echo "Next.js app running on $HOST:$NEXT_PORT" &&
    echo "Nest.js app running on $HOST:$NEST_PORT" &&
    echo "Hasura running on $HOST:$HASURA_PORT" &&
    echo "Firabase emulator UI running on $HOST:$FIREBASE_UI_PORT" || exit 1

echo "Opening hasura console"
nx console hasura
