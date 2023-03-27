import { clientUrl } from '@config';
import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient(clientUrl);
