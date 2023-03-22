import DropdownMenuCheckboxItem from './dropdown-menu-checkbox-item';
import { Root, Trigger, Portal, Content, Item } from '@radix-ui/react-dropdown-menu';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof DropdownMenuCheckboxItem> = {
    component: DropdownMenuCheckboxItem,
    title: 'DropdownMenuCheckboxItem',
};
export default Story;

const Template: ComponentStory<typeof DropdownMenuCheckboxItem> = (args) => (
    <Root>
        <Trigger>Open Dropdown</Trigger>
        <Portal>
            <Content>
                <Item></Item>
                <DropdownMenuCheckboxItem {...args}>Test</DropdownMenuCheckboxItem>
            </Content>
        </Portal>
    </Root>
);

export const Primary = Template.bind({});
Primary.args = {
    textValue: 'test',
};
