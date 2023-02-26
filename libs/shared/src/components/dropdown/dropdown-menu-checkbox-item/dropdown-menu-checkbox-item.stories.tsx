import DropdownMenuCheckboxItem from './dropdown-menu-checkbox-item';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuCheckboxItem> = {
    component: DropdownMenuCheckboxItem,
    title: 'DropdownMenuCheckboxItem',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuCheckboxItem> = (args) => (
    <DropdownMenuCheckboxItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
