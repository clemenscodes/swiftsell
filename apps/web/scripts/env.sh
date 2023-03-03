#!/bin/sh

echo "Setting up .env.local"
APP_DIR="apps/web"

env() {
    CONFIG="$1"
    ENV_FILE="$APP_DIR/config/.env.$CONFIG"
    ENV="$APP_DIR/.env.local"
    [ -f "$ENV_FILE" ] || touch "$ENV_FILE"
    cat "$ENV_FILE" > "$ENV"
}

case "$1" in
development) env "$1" ;;
production) env "$1" ;;
*) echo "Invalid configuration: $1" && exit 1 ;;
esac
