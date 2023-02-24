import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TailwindIndicator } from './tailwind-indicator';

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
