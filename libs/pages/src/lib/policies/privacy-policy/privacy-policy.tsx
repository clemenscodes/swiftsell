import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export const PrivacyPolicy: NextPage<PrivacyPolicyProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to PrivacyPolicy!</h1>
        </div>
    );
};

export default PrivacyPolicy;
