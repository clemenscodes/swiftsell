import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from './icons';

const Story: ComponentMeta<typeof Icons> = {
    component: Icons,
    title: 'Icons',
};
export default Story;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
