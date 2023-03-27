import { Profile } from './profile';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Profile> = {
    component: Profile,
    title: 'Profile',
};
export default Story;

export const Primary = {
    args: {},
};
