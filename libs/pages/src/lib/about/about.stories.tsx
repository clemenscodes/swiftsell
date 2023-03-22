import { About } from './about';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof About> = {
    component: About,
    title: 'About',
};
export default Story;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
