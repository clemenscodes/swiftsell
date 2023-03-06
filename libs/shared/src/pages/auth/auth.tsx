import H1 from '../../components/typography/h1/h1';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface AuthProps {}

export const Auth: NextPage<AuthProps> = ({ ...props }) => {
    return (
        <div className={cn(['m-12 flex items-center justify-center'])}>
            <H1>Login Page</H1>
        </div>
    );
};

export default Auth;
