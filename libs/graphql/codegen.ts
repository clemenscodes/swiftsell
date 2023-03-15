import type { CodegenConfig } from '@graphql-codegen/cli';

const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
const hasura_endpoint = process.env.HASURA_GRAPHQL_ENDPOINT as string;

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
    documents: '../shared/src/**/*.tsx',
    generates: {
        './src/lib/graphql/': {
            preset: 'client',
        },
    },
    config: {
        avoidOptionals: true,
    },
};
export default config;
