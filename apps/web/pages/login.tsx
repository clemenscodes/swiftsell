import { AuthAction, withAuthUser } from 'next-firebase-auth';
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@shared').then((mod) => mod.Login));

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Login);
