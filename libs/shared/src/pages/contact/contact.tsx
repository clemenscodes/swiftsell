import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact: NextPage<ContactProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Contact!</h1>
        </div>
    );
};

export default Contact;
