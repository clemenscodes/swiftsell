import { getSdk } from './graphql/server';
import { serverUrl } from '@config';
import { GraphQLClient } from 'graphql-request';

export const gqlServer = new GraphQLClient(serverUrl);
export const gqlSDK = getSdk(gqlServer);
