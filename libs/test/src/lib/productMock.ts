import { type IProduct } from '@graphql';

export const mockProduct: IProduct = {
    id: 0,
    name: 'mockProduct',
    price: 20,
    description: 'Mock description',
    image: '/mockImageUrl',
    createdAt: undefined,
    updatedAt: undefined,
    Products: [],
    Products_aggregate: {
        aggregate: undefined,
        nodes: [],
    },
};
