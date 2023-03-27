import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface CookiesProps {}

export const Cookies: NextPage<CookiesProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Cookies!</h1>
        </div>
    );
};

export default Cookies;
