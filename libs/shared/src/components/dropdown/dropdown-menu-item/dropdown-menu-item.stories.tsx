import DropdownMenuItem from './dropdown-menu-item';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuItem> = {
    component: DropdownMenuItem,
    title: 'DropdownMenuItem',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuItem> = (args) => (
    <DropdownMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
