import { ProductDetails } from './product-details';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ProductDetails> = {
    component: ProductDetails,
    title: 'ProductDetails',
};
export default Story;

export const Primary = {
    args: {},
};
