import { Banner } from './banner';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Banner> = {
    component: Banner,
    title: 'Banner',
};
export default Story;

export const Primary = {
    args: {},
};
