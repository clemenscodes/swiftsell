#!/bin/sh

HOST="http://localhost"
NEXT_PORT=4200
FIREBASE_UI_PORT=4000
NEST_PORT=5000
HASURA_PORT=9090
nx run-many --target=build --all --output-style=stream
docker compose -f apps/web/docker/docker-compose.yml up -d &&
    nx seed api &&
    echo "Next.js app running on $HOST:$NEXT_PORT" &&
    echo "Nest.js app running on $HOST:$NEST_PORT" &&
    echo "Hasura running on $HOST:$HASURA_PORT" &&
    echo "Firabase emulator UI running on $HOST:$FIREBASE_UI_PORT"
