import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface TermsAndConditionsProps {}

export const TermsAndConditions: NextPage<TermsAndConditionsProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to TermsAndConditions!</h1>
        </div>
    );
};

export default TermsAndConditions;
