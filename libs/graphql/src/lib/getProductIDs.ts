import { graphql } from './graphql/client';

export const getProductQuery = graphql(`
    query getProductIDs {
        Product {
            id
        }
    }
`);
