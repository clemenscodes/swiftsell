import { Small } from './small';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Small> = {
    component: Small,
    title: 'Small',
};
export default Story;

const Template: ComponentStory<typeof Small> = (args) => <Small {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
