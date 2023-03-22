import { Large } from './large';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Large> = {
    component: Large,
    title: 'Large',
};
export default Story;

const Template: ComponentStory<typeof Large> = (args) => <Large {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
