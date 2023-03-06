import { AuthProps } from '@types';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import dynamic from 'next/dynamic';

const Auth = dynamic(() => import('@shared').then((mod) => mod.Auth));

export default withAuthUser<AuthProps>({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth);
