import { CartButton } from './cart-button';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof CartButton> = {
    component: CartButton,
    title: 'CartButton',
};
export default Story;

export const Primary = {
    args: {},
};
