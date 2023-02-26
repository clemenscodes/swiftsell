import { DropdownMenuTrigger } from './dropdown-menu-trigger';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuTrigger> = {
    component: DropdownMenuTrigger,
    title: 'DropdownMenuTrigger',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuTrigger> = (args) => (
    <DropdownMenuTrigger {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
