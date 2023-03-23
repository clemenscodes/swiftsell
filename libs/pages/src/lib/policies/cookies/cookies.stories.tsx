import { Cookies } from './cookies';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Cookies> = {
    component: Cookies,
    title: 'Cookies',
};
export default Story;

export const Primary = {
    args: {},
};
