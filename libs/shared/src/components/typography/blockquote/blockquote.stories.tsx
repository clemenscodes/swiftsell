import { Blockquote } from './blockquote';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

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
