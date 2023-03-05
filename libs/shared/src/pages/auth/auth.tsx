import FirebaseAuth from '../../components/firebase-auth/firebase-auth';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface AuthProps {}

export const Auth: NextPage<AuthProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h3>Sign in</h3>
            <div>
                <p>
                    This auth page is <b>static</b>. It will redirect on the
                    client side if the user is already authenticated.
                </p>
            </div>
            <div>
                <FirebaseAuth />
            </div>
        </div>
    );
};

export default Auth;
