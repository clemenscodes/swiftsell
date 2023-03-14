import { Toaster } from './toaster';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Toaster> = {
    component: Toaster,
    title: 'Toaster',
};
export default Story;

export const Primary = {
    args: {},
};
