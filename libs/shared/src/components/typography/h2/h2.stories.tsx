import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { H2 } from './h2';

const Story: ComponentMeta<typeof H2> = {
    component: H2,
    title: 'H2',
};
export default Story;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
