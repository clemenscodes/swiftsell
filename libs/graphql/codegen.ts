import type { CodegenConfig } from '@graphql-codegen/cli';

const hasura_secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
const hasura_endpoint = (process.env.HASURA_GRAPHQL_ENDPOINT_URL as string) || 'http://localhost:9090/v1/graphql';

const COMMON_SCALAR_MAPPING = {
    uuid: 'string',
    date: 'string',
    jsonb: 'Record<string, any>',
    timestamptz: 'string',
    timestamp: 'string',
    citext: 'string',
    numeric: 'number',
    float8: 'number',
    Role: '(typeof Role)[keyof typeof Role]',
    Color: '(typeof Color)[keyof typeof Color]',
    Size: '(typeof Size)[keyof typeof Size]',
};

const COMMON_PLUGINS = [
    'typescript',
    'typescript-operations',
    {
        add: {
            content: "import { type Color, type Size, type Role } from '@prisma/api'",
            placement: 'prepend',
        },
    },
];

const COMMON_OPTIONS = {
    pureMagicComment: true,
    skipTypename: true,
    typesPrefix: 'I',
    avoidOptionals: {
        object: true,
        field: true,
        inputValue: false,
    },
    scalars: COMMON_SCALAR_MAPPING,
    enumsAsConst: true,
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
            plugins: [...COMMON_PLUGINS, 'typescript-graphql-request'],
            config: {
                ...COMMON_OPTIONS,
                rawRequest: true,
                useTypeImports: true,
            },
        },
        './src/lib/graphql/sdk.ts': {
            plugins: [...COMMON_PLUGINS, 'typescript-react-query'],
            config: {
                fetcher: {
                    endpoint:
                        '(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL ?? "http://localhost:9090/v1/graphql")',
                },
                ...COMMON_OPTIONS,
                exposeDocument: true,
                exposeQueryKeys: true,
                exposeMutationKeys: true,
                addInfiniteQuery: true,
                errorType: 'Error',
            },
        },
    },
};

export default config;
