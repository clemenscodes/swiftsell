import { TailwindIndicator } from './tailwind-indicator';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

const Story: ComponentMeta<typeof TailwindIndicator> = {
    component: TailwindIndicator,
    title: 'TailwindIndicator',
};
export default Story;

const Template: ComponentStory<typeof TailwindIndicator> = (args) => (
    <TailwindIndicator {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
