import { graphql } from './graphql/client';

export const getProductsQuery = graphql(`
    query getProducts {
        Product {
            id
            name
            description
            price
            image
        }
    }
`);
