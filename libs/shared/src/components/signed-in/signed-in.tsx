import { Button } from '../button/button';
import { cn } from '@styles';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';

/* eslint-disable-next-line */
export interface SignedInProps {}

export const SignedIn: React.FC<SignedInProps> = ({ ...props }) => {
    const user = useAuthUser();
    return (
        <div
            className={cn([
                'm-6 flex flex-col items-center justify-center text-2xl font-bold',
            ])}
        >
            <p>Signed in as {user.email}</p>
            <div className={cn('m-6')}>
                <Button
                    onClick={() => {
                        user.signOut();
                    }}
                >
                    Sign out
                </Button>
            </div>
        </div>
    );
};

export default withAuthUser<SignedInProps>()(SignedIn);
