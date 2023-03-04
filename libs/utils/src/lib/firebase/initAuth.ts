import { getAuthEmulatorHost } from './getAuthEmulatorHost';
import { onLoginRequestError } from './onLoginRequestError';
import { onLogoutRequestError } from './onLogoutRequestError';
import { onTokenRefreshError } from './onTokenRefreshError';
import { onVerifyTokenError } from './onVerifyTokenError';
import {
    getFirebaseConfig,
    isProduction,
    isTrustedEnv,
    siteConfig,
} from '@config';
import { Option, SetOption } from 'cookies';
import { InitConfig, init } from 'next-firebase-auth';

const debug = !isProduction();
const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const cookies: Option & SetOption & { name: string } = {
    name: siteConfig.name,
    keys: [
        process.env.COOKIE_SECRET_CURRENT as string,
        process.env.COOKIE_SECRET_PREVIOUS as string,
    ],
    httpOnly: true,
    maxAge: TWELVE_DAYS_IN_MS,
    overwrite: true,
    path: '/',
    sameSite: 'strict',
    secure: isTrustedEnv,
    signed: true,
};

const config: InitConfig = {
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    useFirebaseAdminDefaultCredential: isTrustedEnv,
    firebaseAuthEmulatorHost: getAuthEmulatorHost(),
    firebaseClientInitConfig: getFirebaseConfig(),
    cookies,
    onLoginRequestError,
    onLogoutRequestError,
    onVerifyTokenError,
    onTokenRefreshError,
    debug,
};

export const initAuth = () => init(config);
