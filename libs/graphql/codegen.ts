import type { CodegenConfig } from '@graphql-codegen/cli';

const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
const hasura_endpoint = (process.env.HASURA_GRAPHQL_ENDPOINT_URL as string) || 'http://localhost:9090/v1/graphql';

const commonOptions = {
    pureMagicComment: true,
    skipTypename: true,
    typesPrefix: 'I',
};

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            [hasura_endpoint]: {
                headers: {
                    'x-hasura-admin-secret': hasura_secret,
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.gql', './src/**/*.graphql', './src/**/*.ts'],
    generates: {
        './src/lib/graphql/server.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
                ...commonOptions,
                rawRequest: true,
                useTypeImports: true,
            },
        },
        './src/lib/graphql/sdk.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            config: {
                fetcher: {
                    endpoint:
                        '(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL ?? "http://localhost:9090/v1/graphql")',
                },
                exposeDocument: true,
                exposeQueryKeys: true,
                exposeMutationKeys: true,
                addInfiniteQuery: true,
                errorType: 'Error',
                ...commonOptions,
            },
        },
    },
};
export default config;
