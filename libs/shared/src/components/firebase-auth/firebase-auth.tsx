import { isBrowser } from '@config';
import { cn } from '@styles';
import { getApp } from 'firebase/app';
import { EmailAuthProvider, getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseAuthConfig = {
    signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
        signInSuccessWithAuthResult: () =>
            // Don't automatically redirect. We handle redirects using
            // `next-firebase-auth`.
            false,
    },
};

/* eslint-disable-next-line */
export interface FirebaseAuthProps {}

export const FirebaseAuth: React.FC<FirebaseAuthProps> = ({ ...props }) => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false);
    useEffect(() => {
        if (isBrowser()) {
            setRenderAuth(true);
        }
    }, []);
    return (
        <div className={cn()}>
            {renderAuth ? (
                <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={getAuth(getApp())}
                />
            ) : null}
        </div>
    );
};

export default FirebaseAuth;
