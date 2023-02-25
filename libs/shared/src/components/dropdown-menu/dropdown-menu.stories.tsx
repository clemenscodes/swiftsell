import { DropdownMenu } from './dropdown-menu';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenu> = {
    component: DropdownMenu,
    title: 'DropdownMenu',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
    <DropdownMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
