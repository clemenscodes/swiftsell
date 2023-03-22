import DropdownMenuSubContent from './dropdown-menu-sub-content';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuSubContent> = {
    component: DropdownMenuSubContent,
    title: 'DropdownMenuSubContent',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuSubContent> = (args) => <DropdownMenuSubContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
