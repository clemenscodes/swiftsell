import { Lead } from './lead';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Lead> = {
    component: Lead,
    title: 'Lead',
};
export default Story;

const Template: ComponentStory<typeof Lead> = (args) => <Lead {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
