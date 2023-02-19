import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InlineCode } from './inline-code';

const Story: ComponentMeta<typeof InlineCode> = {
    component: InlineCode,
    title: 'InlineCode',
};
export default Story;

const Template: ComponentStory<typeof InlineCode> = (args) => (
    <InlineCode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
