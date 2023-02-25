import { P } from './p';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof P> = {
    component: P,
    title: 'P',
};
export default Story;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
