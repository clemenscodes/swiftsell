import { LoginButton } from './login-button';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof LoginButton> = {
    component: LoginButton,
    title: 'LoginButton',
};
export default Story;

const Template: ComponentStory<typeof LoginButton> = (args) => (
    <LoginButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
