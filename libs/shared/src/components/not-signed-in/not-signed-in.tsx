import { Button } from '../button/button';
import { cn } from '@styles';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface NotSignedInProps {}

export const NotSignedIn: React.FC<NotSignedInProps> = ({ ...props }) => {
    return (
        <div className={cn(['m-6'])}>
            <p>You are not signed in.</p>
            <div className={cn(['m-6 flex justify-center'])}>
                <Link href='/auth'>
                    <Button>Sign in</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotSignedIn;
