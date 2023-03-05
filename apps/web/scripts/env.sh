#!/bin/sh

APP="web"
APP_DIR="apps/$APP"

env() {
    CONFIG="$1"
    ENV_FILE="$APP_DIR/config/.env.$CONFIG"
    SKELETON="$APP_DIR/config/.env.skeleton"
    ENV="$APP_DIR/.env.local"
    echo "Setting up $APP_DIR/.env.local in $CONFIG configuration"
    [ -f "$ENV_FILE" ] || touch "$ENV_FILE"
    grep -v "dummy" $SKELETON >"$ENV"
    cat "$ENV_FILE" >>"$ENV"
    if [ -n "$CI" ]; then
        echo "NEXT_PUBLIC_CI=true" >>"$ENV"
        echo "CI=true" >>"$ENV"
    fi
    # cat $ENV
}

case "$1" in
development) env "$1" ;;
production) env "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
