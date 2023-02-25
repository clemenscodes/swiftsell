import Index from '../pages';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

const Story: ComponentMeta<typeof Index> = {
    component: Index,
    title: 'Index',
};
export default Story;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const Primary = Template.bind({});
Primary.args = {};
