import DropdownMenuContent from './dropdown-menu-content';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuContent> = {
    component: DropdownMenuContent,
    title: 'DropdownMenuContent',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuContent> = (args) => <DropdownMenuContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
