import { Products } from './products';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Products> = {
    component: Products,
    title: 'Products',
};
export default Story;

export const Primary = {
    args: {},
};
