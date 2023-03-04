import { isTrustedEnv } from '@config';
import { firebaseAdminInitConfig } from '@utils';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initAdminSDK = () => {
    if (getApps().length) return;
    if (isTrustedEnv) {
        const { options } = initializeApp();
        console.log('Initialized Firebase Admin SDK using ADC');
        const { projectId, serviceAccountId, credential } = options;
        const token = credential?.getAccessToken();
        console.log({ token }, { projectId }, { serviceAccountId });
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
