import { EmailAuthProvider } from 'firebase/auth';

export const firebaseAuthConfig = {
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
