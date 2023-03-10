import { isTrustedEnv } from '@config';
import { firebaseAdminInitConfig } from '@utils';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initAdminSDK = () => {
    if (getApps().length) return;
    if (isTrustedEnv) {
        console.log('Initializing Firebase Admin SDK with ADC');
        return initializeApp();
    }
    if (firebaseAdminInitConfig) {
        console.log('Initializing Firebase Admin SDK with credentials');
        return initializeApp({
            ...firebaseAdminInitConfig,
            credential: cert({
                ...firebaseAdminInitConfig.credential,
            }),
        });
    }
    throw Error('Failed initializing Firebase Admin SDK');
};
