import { isTrustedEnv } from '@config';
import { firebaseAdminInitConfig } from '@utils';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initAdminSDK = () => {
    if (getApps().length) return;
    if (isTrustedEnv) {
        const { options } = initializeApp();
        console.log({ options });
        console.log('Initialized Firebase Admin SDK using ADC');
        return;
    }
    if (firebaseAdminInitConfig) {
        initializeApp({
            ...firebaseAdminInitConfig,
            credential: cert({
                ...firebaseAdminInitConfig.credential,
            }),
        });
        console.log('Initialized Firebase Admin SDK using certificate');
        return;
    }
    throw Error('Failed initializing Firebase Admin SDK');
};
