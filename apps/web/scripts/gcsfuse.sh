#!/usr/bin/env bash
set -eo pipefail

BUCKET_ADDRESS="$(gsutil ls | grep isr)"
BUCKET="$(echo "$BUCKET_ADDRESS" | awk -F '/' '{print $3}')"
CONTAINER_PAGES="$APP_HOME/dist/$APP_DIR/.next/server/pages"
CRASH="$APP_HOME/crash.txt"
SERVER="$APP_HOME/$APP_DIR/server.js"
MNT_DIR="$APP_HOME/gcsfuse"

sync() {
    echo "Syncing newer files from $1 to $2..."
    gsutil -m rsync -u -r "$1" "$2"
    echo "Done syncing files from $1 to $2..."
}

authorize_gcloud() {
    if [ -n "$LOCAL" ]; then
        echo "Authorizing locally..."
        gcloud auth activate-service-account "$SERVICE_ACCOUNT" --key-file="$GOOGLE_APPLICATION_CREDENTIALS"
    fi
}

mount_google_cloud_storage() {
    echo "Mounting GCS Fuse."
    if [ -n "$LOCAL" ]; then
        echo "Mounting locally..."
        exec gcsfuse --key-file="$GOOGLE_APPLICATION_CREDENTIALS" --foreground --debug_gcs "$BUCKET" "$MNT_DIR" &
    else
        echo "Mounting in Cloud Run..."
        exec gcsfuse --debug_gcs --debug_fuse --log-file="$CRASH" --log-format=text "$BUCKET" "$MNT_DIR" &
    fi
    echo "Mounting completed."
    # sync "$BUCKET_ADDRESS" "$CONTAINER_PAGES"
}

start_nextjs_app() {
    echo "Starting Next.js app..."
    exec node "$SERVER" &
    echo "Next.js app started"
}

cleanup() {
    echo "Cleaning up..."
    # sync "$CONTAINER_PAGES" "$BUCKET_ADDRESS"
    cat "$CRASH"
    echo "Adios."
}

authorize_gcloud
mount_google_cloud_storage
start_nextjs_app

# while true; do
#     sync "$CONTAINER_PAGES" "$BUCKET_ADDRESS"
#     sync "$BUCKET_ADDRESS" "$CONTAINER_PAGES"
#     sleep 5
# done &

# Exit immediately when one of the background processes terminate.
wait -n

cleanup
