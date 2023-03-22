import { H1 } from './h1';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof H1> = {
    component: H1,
    title: 'H1',
};
export default Story;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
