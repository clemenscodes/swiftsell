#!/bin/sh

APP="web"
APP_DIR="apps/$APP"
DIST="dist/$APP_DIR"
NEXT_DIST="$DIST/.next"
STANDALONE="$NEXT_DIST/standalone"
STANDALONE_APP="$STANDALONE/$APP_DIR"
SERVER="$STANDALONE_APP/server.js"
CUSTOM_SERVER="$STANDALONE_APP/server/server.js"
MAIN="$STANDALONE_APP/main.js"
CONFIG="$APP_DIR/server.conf.ts"
CONFIG_JS="$STANDALONE_APP/server/server.conf.js"

echo "Updating config"

echo "
import { NextConfig } from 'next';
import { join } from 'path';
interface Config {
    conf: NextConfig;
}
export const config: Config = {" >$CONFIG
cat $SERVER | grep 'conf:' >>$CONFIG
echo "}" >>$CONFIG

echo "Formatting"

nx format

echo "Patching config"

sed -i '/trustHostHeader: false/d' $CONFIG
sed -i "s|outputFileTracingRoot: '.*'|outputFileTracingRoot: join(__dirname, '../../')|" $CONFIG

echo "Building server with patched config"

nx build-custom-server $APP --skip-nx-cache

echo "Building server with patched config"

mv "$CUSTOM_SERVER" "$MAIN"
mv "$CONFIG_JS" "$STANDALONE_APP/server.conf.js"
