import { NotSignedIn } from './not-signed-in';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof NotSignedIn> = {
    component: NotSignedIn,
    title: 'NotSignedIn',
};
export default Story;

export const Primary = {
    args: {},
};
