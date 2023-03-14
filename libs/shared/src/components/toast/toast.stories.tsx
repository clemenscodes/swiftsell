import { Toast } from './toast';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Toast> = {
    component: Toast,
    title: 'Toast',
};
export default Story;

export const Primary = {
    args: {},
};
