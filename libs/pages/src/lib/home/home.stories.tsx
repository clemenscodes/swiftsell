import { Home } from './home';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof Home> = {
    component: Home,
    title: 'Home',
};
export default Story;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const Primary = Template.bind({});
Primary.args = {};
