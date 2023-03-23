import { getSdk } from './graphql/sdk';
import { serverUrl } from '@config';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(serverUrl);
export const graphQLClient = getSdk(client);
