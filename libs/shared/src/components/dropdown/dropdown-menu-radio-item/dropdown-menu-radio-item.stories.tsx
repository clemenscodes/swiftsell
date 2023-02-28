import DropdownMenuRadioItem from './dropdown-menu-radio-item';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuRadioItem> = {
    component: DropdownMenuRadioItem,
    title: 'DropdownMenuRadioItem',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuRadioItem> = (args) => (
    <DropdownMenuRadioItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
