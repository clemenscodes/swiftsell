import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { H4 } from './h4';

const Story: ComponentMeta<typeof H4> = {
    component: H4,
    title: 'H4',
};
export default Story;

const Template: ComponentStory<typeof H4> = (args) => <H4 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
