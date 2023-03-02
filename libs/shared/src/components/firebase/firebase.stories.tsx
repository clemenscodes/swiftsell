import { Firebase } from './firebase';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Firebase> = {
    component: Firebase,
    title: 'Firebase',
};
export default Story;

const Template: ComponentStory<typeof Firebase> = (args) => (
    <Firebase {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
