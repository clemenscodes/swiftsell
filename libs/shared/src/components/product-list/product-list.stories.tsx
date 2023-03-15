import { ProductList } from './product-list';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ProductList> = {
    component: ProductList,
    title: 'ProductList',
};
export default Story;

export const Primary = {
    args: {},
};
