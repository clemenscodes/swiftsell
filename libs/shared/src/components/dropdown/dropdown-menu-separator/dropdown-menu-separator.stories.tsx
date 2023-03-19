import DropdownMenuSeparator from './dropdown-menu-separator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuSeparator> = {
    component: DropdownMenuSeparator,
    title: 'DropdownMenuSeparator',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuSeparator> = (args) => <DropdownMenuSeparator {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
