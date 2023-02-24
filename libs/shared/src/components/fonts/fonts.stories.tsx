import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fonts } from './fonts';

const Story: ComponentMeta<typeof Fonts> = {
    component: Fonts,
    title: 'Fonts',
};
export default Story;

const Template: ComponentStory<typeof Fonts> = (args) => <Fonts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
