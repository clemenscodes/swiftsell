import { Command } from './command';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Command> = {
    component: Command,
    title: 'Command',
};
export default Story;

export const Primary = {
    args: {},
};
