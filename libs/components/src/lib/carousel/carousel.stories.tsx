import { Carousel } from './carousel';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Carousel> = {
    component: Carousel,
    title: 'Carousel',
};
export default Story;

export const Primary = {
    args: {},
};
