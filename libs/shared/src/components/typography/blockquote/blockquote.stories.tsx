import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blockquote } from './blockquote';

const Story: ComponentMeta<typeof Blockquote> = {
    component: Blockquote,
    title: 'Blockquote',
};
export default Story;

const Template: ComponentStory<typeof Blockquote> = (args) => (
    <Blockquote {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
