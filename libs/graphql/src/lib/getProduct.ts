import { graphql } from './graphql/client';

export const getProductQuery = graphql(`
    query getProduct($id: Int!) {
        Product(where: { id: { _eq: $id } }) {
            id
            name
            description
            price
            image
        }
    }
`);
