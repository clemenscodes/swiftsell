import { Cart } from './cart';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Cart> = {
    component: Cart,
    title: 'Cart',
};
export default Story;

export const Primary = {
    args: {},
};
