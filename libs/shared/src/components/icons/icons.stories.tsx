import { Icons } from './icons';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Icons.Sun> = {
    component: Icons.Sun,
    title: 'Icons',
};
export default Story;

const Template: ComponentStory<typeof Icons.Sun> = (args) => <Icons.Sun {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
