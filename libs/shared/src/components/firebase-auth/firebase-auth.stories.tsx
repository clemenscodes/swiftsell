import { FirebaseAuth } from './firebase-auth';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof FirebaseAuth> = {
    component: FirebaseAuth,
    title: 'FirebaseAuth',
};
export default Story;

export const Primary = {
    args: {},
};
