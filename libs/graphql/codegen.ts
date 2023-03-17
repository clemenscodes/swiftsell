import type { CodegenConfig } from '@graphql-codegen/cli';

const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
const hasura_endpoint = (process.env.HASURA_GRAPHQL_ENDPOINT as string) || 'http://localhost:9090/v1/graphql';

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
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    generates: {
        './src/lib/graphql/': {
            preset: 'client',
        },
    },
};
export default config;
