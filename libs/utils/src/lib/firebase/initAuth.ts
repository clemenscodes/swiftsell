import { getFirebaseConfig, siteConfig } from '@config';
import { init } from 'next-firebase-auth';

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

export const initAuth = () => {
    init({
        debug: true,
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        onLoginRequestError: (err) => {
            console.error(err);
        },
        onLogoutRequestError: (err) => {
            console.error(err);
        },
        // firebaseAuthEmulatorHost: 'localhost:9099',
        useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            ...getFirebaseConfig(),
        },
        cookies: {
            name: siteConfig.name,
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: TWELVE_DAYS_IN_MS,
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
        onVerifyTokenError: (err) => {
            console.error(err);
        },
        onTokenRefreshError: (err) => {
            console.error(err);
        },
    });
};
