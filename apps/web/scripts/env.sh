#!/bin/sh

APP="web"
APP_DIR="apps/$APP"

env() {
    CONFIG="$1"
    ENV_FILE="$APP_DIR/config/.env.$CONFIG"
    SKELETON="$APP_DIR/config/.env.skeleton"
    LOCAL_ENV="$APP_DIR/.env.local"
    ENV="$APP_DIR/.env"
    echo "Setting up $APP_DIR/.env.local in $CONFIG configuration"
    [ -f "$ENV_FILE" ] || touch "$ENV_FILE"
    COOKIE_SECRET_PREVIOUS="$(grep "COOKIE_SECRET_PREVIOUS" "$ENV_FILE" | awk -F '"' '{print $2}')"
    COOKIE_SECRET_CURRENT="$(grep "COOKIE_SECRET_CURRENT" "$ENV_FILE" | awk -F '"' '{print $2}')"
    [ -n "$COOKIE_SECRET_PREVIOUS" ] || echo "COOKIE_SECRET_PREVIOUS=\"$(openssl rand -base64 16)\"" >>"$ENV_FILE"
    [ -n "$COOKIE_SECRET_CURRENT" ] || echo "COOKIE_SECRET_CURRENT=\"$(openssl rand -base64 16)\"" >>"$ENV_FILE"
    grep -v "dummy" $SKELETON >"$LOCAL_ENV"
    cat "$ENV_FILE" >>"$LOCAL_ENV"
    if [ -n "$CI" ]; then
        echo "NEXT_PUBLIC_CI=true" >>"$LOCAL_ENV"
        echo "CI=true" >>"$LOCAL_ENV"
    fi
}

case "$1" in
development) env "$1" ;;
production) env "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
