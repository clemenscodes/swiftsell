import { LegalNotice } from './legal-notice';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof LegalNotice> = {
    component: LegalNotice,
    title: 'LegalNotice',
};
export default Story;

export const Primary = {
    args: {},
};
