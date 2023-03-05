import { SignedIn } from './signed-in';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SignedIn> = {
    component: SignedIn,
    title: 'SignedIn',
};
export default Story;

export const Primary = {
    args: {},
};
