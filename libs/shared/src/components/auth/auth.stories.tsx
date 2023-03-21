import { Auth } from './auth';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Auth> = {
    component: Auth,
    title: 'Auth',
};
export default Story;

export const Primary = {
    args: {},
};
