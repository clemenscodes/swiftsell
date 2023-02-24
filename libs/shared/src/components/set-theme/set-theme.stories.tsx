import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SetTheme } from './set-theme';

const Story: ComponentMeta<typeof SetTheme> = {
    component: SetTheme,
    title: 'SetTheme',
};
export default Story;

const Template: ComponentStory<typeof SetTheme> = (args) => (
    <SetTheme {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
