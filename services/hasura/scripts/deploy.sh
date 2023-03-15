#!/bin/sh

if [ -z "$HASURA_GRAPHQL_ADMIN_SECRET" ]; then
    echo "HASURA_GRAPHQL_ADMIN_SECRET is not defined" && exit 1
fi

if [ -z "$HASURA_GRAPHQL_ENDPOINT" ]; then
    echo "HASURA_GRAPHQL_ENDPOINT is not defined" && exit 1
fi

echo "Deploying Hasura Metadata"
npx hasura metadata apply --project services/hasura --endpoint "$HASURA_GRAPHQL_ENDPOINT" --admin-secret "$HASURA_GRAPHQL_ADMIN_SECRET"
