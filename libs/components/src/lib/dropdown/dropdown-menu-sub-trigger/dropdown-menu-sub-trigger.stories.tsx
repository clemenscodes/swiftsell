import DropdownMenuSubTrigger from './dropdown-menu-sub-trigger';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuSubTrigger> = {
    component: DropdownMenuSubTrigger,
    title: 'DropdownMenuSubTrigger',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuSubTrigger> = (args) => <DropdownMenuSubTrigger {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
