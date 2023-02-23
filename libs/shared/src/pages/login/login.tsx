import { NextPage } from 'next';
/* eslint-disable-next-line */
export interface LoginProps {}

export const Login: NextPage<LoginProps> = ({ ...props }) => {
    return (
        <div>
            <h1>Welcome to Login!</h1>
        </div>
    );
};

export default Login;
