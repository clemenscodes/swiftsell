import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModeToggle } from './mode-toggle';

const Story: ComponentMeta<typeof ModeToggle> = {
    component: ModeToggle,
    title: 'ModeToggle',
};
export default Story;

const Template: ComponentStory<typeof ModeToggle> = (args) => (
    <ModeToggle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
