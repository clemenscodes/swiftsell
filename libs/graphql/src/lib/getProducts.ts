import { graphql } from './graphql';

export const getProductsQuery = graphql(`
    query getProducts {
        product {
            id
            name
            description
            price
            image
        }
    }
`);
