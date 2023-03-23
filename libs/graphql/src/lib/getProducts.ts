import { graphql } from './graphql/client';

export const getProductsQuery = graphql(`
    query getProducts {
        Product(limit: 8) {
            id
            name
            description
            price
            image
        }
    }
`);
