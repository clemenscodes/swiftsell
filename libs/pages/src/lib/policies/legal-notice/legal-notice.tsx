import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface LegalNoticeProps {}

export const LegalNotice: NextPage<LegalNoticeProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to LegalNotice!</h1>
        </div>
    );
};

export default LegalNotice;
