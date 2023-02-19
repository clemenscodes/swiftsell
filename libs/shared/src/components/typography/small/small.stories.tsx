import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Small } from './small';

const Story: ComponentMeta<typeof Small> = {
    component: Small,
    title: 'Small',
};
export default Story;

const Template: ComponentStory<typeof Small> = (args) => <Small {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
