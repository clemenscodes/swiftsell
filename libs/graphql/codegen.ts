import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '../../services/hasura/.env.skeleton') });

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
    documents: [],
    generates: {
        './src/lib/sdk.ts': {
            plugins: ['typescript', 'typescript-operations'],
        },
    },
};
export default config;
