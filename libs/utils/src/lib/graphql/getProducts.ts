import { parse } from 'graphql';

export const GET_PRODUCTS = parse(`
    query {
        products {
            id
            name
            description
            price
            image
            store {
                id
                name
                address
            }
            inventory {
                id
                quantity
            }
        }
    }
`);
