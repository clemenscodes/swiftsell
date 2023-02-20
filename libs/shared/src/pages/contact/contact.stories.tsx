import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Contact } from './contact';

const Story: ComponentMeta<typeof Contact> = {
    component: Contact,
    title: 'Contact',
};
export default Story;

const Template: ComponentStory<typeof Contact> = (args) => (
    <Contact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
