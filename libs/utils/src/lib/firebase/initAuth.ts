import { onLoginRequestError } from './onLoginRequestError';
import { onLogoutRequestError } from './onLogoutRequestError';
import { onTokenRefreshError } from './onTokenRefreshError';
import { onVerifyTokenError } from './onVerifyTokenError';
import { getFirebaseConfig, siteConfig } from '@config';
import * as Cookies from 'cookies';
import { InitConfig, init } from 'next-firebase-auth';

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const cookies: Cookies.Option &
    Cookies.SetOption & {
        name: string;
    } = {
    name: siteConfig.name,
    // Keys are required unless you set `signed` to `false`.
    // The keys cannot be accessible on the client side.
    keys: [
        process.env.COOKIE_SECRET_CURRENT as string,
        process.env.COOKIE_SECRET_PREVIOUS as string,
    ],
    httpOnly: true,
    maxAge: TWELVE_DAYS_IN_MS,
    overwrite: true,
    path: '/',
    sameSite: 'strict',
    secure: true, // set this to false in local (non-HTTPS) development
    signed: true,
};

const config: InitConfig = {
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
        ...getFirebaseConfig(),
    },
    cookies,
    onLoginRequestError,
    onLogoutRequestError,
    onVerifyTokenError,
    onTokenRefreshError,
};

export const initAuth = () => init(config);
