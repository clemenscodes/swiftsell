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

echo "
import { NextConfig } from 'next';
import { join } from 'path';
interface Config {
    conf: NextConfig;
}
export const config: Config = {" >$CONFIG
cat $SERVER | grep 'conf:' >>$CONFIG
echo "}" >>$CONFIG

nx format

sed -i '/trustHostHeader: false/d' $CONFIG
sed -i "s|outputFileTracingRoot: '.*'|outputFileTracingRoot: join(__dirname, '../../')|" $CONFIG

npx nx build-custom-server $APP --skip-nx-cache

mv "$CUSTOM_SERVER" "$MAIN"
mv "$CONFIG_JS" "$STANDALONE_APP/server.conf.js"
