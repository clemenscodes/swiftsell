import type { CodegenConfig } from '@graphql-codegen/cli';

const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
const hasura_endpoint = process.env.HASURA_GRAPHQL_ENDPOINT as string;

const COMMON_SCALAR_MAPPING = {
    uuid: 'string',
    date: 'string',
    jsonb: 'Record<string, any>',
    timestamptz: 'string',
    timestamp: 'string',
    citext: 'string',
    numeric: 'number',
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
    documents: [],
    generates: {
        './src/lib/sdk.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
            ],
            config: {
                gqlImport: 'graphql-request#gql',
                avoidOptionals: {
                    object: true,
                    field: true,
                    inputValue: false,
                },
                scalars: COMMON_SCALAR_MAPPING,
            },
        },
    },
};
export default config;
