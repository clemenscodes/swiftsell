import { Search } from './search';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Search> = {
    component: Search,
    title: 'Search',
};
export default Story;

export const Primary = {
    args: {},
};
