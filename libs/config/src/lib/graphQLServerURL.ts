const endpoint = (process.env.HASURA_GRAPHQL_ENDPOINT as string) || 'http://hasura:8080';

export const serverUrl = `${endpoint}/v1/graphql`;
