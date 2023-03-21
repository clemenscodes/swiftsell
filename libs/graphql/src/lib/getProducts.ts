import { graphql } from './graphql';

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
