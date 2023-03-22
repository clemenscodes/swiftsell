import DropdownMenuLabel from './dropdown-menu-label';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuLabel> = {
    component: DropdownMenuLabel,
    title: 'DropdownMenuLabel',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuLabel> = (args) => <DropdownMenuLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
