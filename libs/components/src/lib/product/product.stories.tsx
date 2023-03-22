import { Product } from './product';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Product> = {
    component: Product,
    title: 'Product',
};
export default Story;

export const Primary = {
    args: {},
};
