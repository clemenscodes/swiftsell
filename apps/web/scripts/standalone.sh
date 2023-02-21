#!/bin/sh

APP="web"
APP_DIR="apps/$APP"
DIST="dist/$APP_DIR"
PUBLIC="$DIST/public"
NEXT_DIST="$DIST/.next"
STATIC="$NEXT_DIST/static"
STANDALONE="$NEXT_DIST/standalone"
STANDALONE_APP="$STANDALONE/$APP_DIR"
STANDALONE_DIST="$STANDALONE/$NEXT_DIST"
SERVER="$STANDALONE_APP/server.js"

cp -r "$PUBLIC" "$STANDALONE_APP/public"
cp -r "$STATIC" "$STANDALONE_DIST/static"

node "$SERVER"
