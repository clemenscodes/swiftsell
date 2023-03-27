const endpoint = (process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string) || 'http://localhost:9090';

export const clientUrl = `${endpoint}/v1/graphql`;
