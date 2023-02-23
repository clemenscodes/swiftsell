import { cn } from '@styles';
import { NextPage } from 'next';
/* eslint-disable-next-line */
export interface LoginProps {}

export const Login: NextPage<LoginProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Login!</h1>
        </div>
    );
};

export default Login;
