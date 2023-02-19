import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './list';

const Story: ComponentMeta<typeof List> = {
    component: List,
    title: 'List',
};
export default Story;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
