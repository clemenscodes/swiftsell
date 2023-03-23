import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface FaqProps {}

export const Faq: NextPage<FaqProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Faq!</h1>
        </div>
    );
};

export default Faq;
