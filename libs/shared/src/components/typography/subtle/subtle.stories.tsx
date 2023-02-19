import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Subtle } from './subtle';

const Story: ComponentMeta<typeof Subtle> = {
    component: Subtle,
    title: 'Subtle',
};
export default Story;

const Template: ComponentStory<typeof Subtle> = (args) => <Subtle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
