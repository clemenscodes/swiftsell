import { IImage, type IProduct } from '@graphql';

const images: IImage = {
    id: 0,
    productId: 0,
    url: '/mockProduct',
    Product: {
        Images: [],
        Images_aggregate: {
            aggregate: null,
            nodes: [],
        },
        Product: null,
        ProductSizes: [],
        ProductSizes_aggregate: {
            aggregate: null,
            nodes: [],
        },
        Products: [],
        Products_aggregate: {
            aggregate: null,
            nodes: [],
        },
        color: 'Black',
        createdAt: '',
        description: null,
        id: 0,
        name: '',
        parentId: null,
        price: 0,
        updatedAt: '',
    },
};

export const mockProduct: IProduct = {
    id: 0,
    name: 'mockProduct',
    price: 20,
    description: 'Mock description',
    Images: [images],
    Products: [],
    Images_aggregate: {
        aggregate: null,
        nodes: [],
    },
    Product: null,
    ProductSizes: [],
    ProductSizes_aggregate: {
        aggregate: null,
        nodes: [],
    },
    Products_aggregate: {
        aggregate: null,
        nodes: [],
    },
    color: 'Black',
    createdAt: '',
    parentId: null,
    updatedAt: '',
};
