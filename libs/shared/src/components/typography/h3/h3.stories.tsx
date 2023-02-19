import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { H3 } from './h3';

const Story: ComponentMeta<typeof H3> = {
    component: H3,
    title: 'H3',
};
export default Story;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
