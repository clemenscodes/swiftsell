import FirebaseAuth from '../../components/firebase-auth/firebase-auth';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface AuthProps {}

export const Auth: NextPage<AuthProps> = ({ ...props }) => {
    return (
        <div className={cn(['m-12'])}>
            <FirebaseAuth />
        </div>
    );
};

export default Auth;
