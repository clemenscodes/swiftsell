import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pwa } from './pwa';

const Story: ComponentMeta<typeof Pwa> = {
    component: Pwa,
    title: 'Pwa',
};
export default Story;

const Template: ComponentStory<typeof Pwa> = (args) => <Pwa {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
