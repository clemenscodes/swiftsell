import { IImage, type IProduct } from '@graphql';

const images: IImage = {
    Product: {
        Images: [],
        Images_aggregate: {
            aggregate: undefined,
            nodes: [],
        },
        Product: undefined,
        Products: [],
        Products_aggregate: {
            aggregate: undefined,
            nodes: [],
        },
        color: undefined,
        createdAt: undefined,
        description: undefined,
        id: 0,
        name: '',
        parentId: undefined,
        price: undefined,
        size: undefined,
        updatedAt: undefined,
    },
    id: 0,
    productId: 0,
    url: '/mockProduct',
};

export const mockProduct: IProduct = {
    id: 0,
    name: 'mockProduct',
    price: 20,
    description: 'Mock description',
    Images: [images],
    createdAt: undefined,
    updatedAt: undefined,
    Products: [],
    Products_aggregate: {
        aggregate: undefined,
        nodes: [],
    },
    Images_aggregate: {
        aggregate: undefined,
        nodes: [],
    },
};
