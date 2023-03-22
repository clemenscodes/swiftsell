import { useSession } from 'next-auth/react';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface AuthProps extends PropsWithChildren {}

export const Auth: React.FC<AuthProps> = ({ children, ...props }) => {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true });

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return <div>{children}</div>;
};

export default Auth;
