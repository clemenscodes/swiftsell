#!/bin/sh

APP="graphql"
APP_DIR="libs/$APP"

env() {
    CONFIG="$1"
    ENV_FILE="$APP_DIR/config/.env.$CONFIG"
    SKELETON="$APP_DIR/config/.env.skeleton"
    ENV="$APP_DIR/.env"
    echo "Setting up $APP_DIR/.env in $CONFIG configuration"
    [ -f "$ENV_FILE" ] || touch "$ENV_FILE"
    grep -v "dummy" $SKELETON >"$ENV"
    cat "$ENV_FILE" >>"$ENV"
}

case "$1" in
development) env "$1" ;;
production) env "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
