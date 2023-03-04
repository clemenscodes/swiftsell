import { isTrustedEnv } from '@config';
import { firebaseAdminInitConfig } from '@utils';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initAdminSDK = () => {
    if (getApps().length) return;
    if (isTrustedEnv) {
        const { options } = initializeApp();
        console.log({options})
        console.log('Initialized Firebase Admin SDK using ADC');
        const { projectId, serviceAccountId } = options;
        console.log({ projectId }, { serviceAccountId });
        return;
    }
    if (firebaseAdminInitConfig) {
        const { options } = initializeApp({
            ...firebaseAdminInitConfig,
            credential: cert({
                ...firebaseAdminInitConfig.credential,
            }),
        });
        console.log({options})
        const { projectId, serviceAccountId } = options;
        console.log({ projectId }, { serviceAccountId });
        console.log('Initialized Firebase Admin SDK using certificate');
        return;
    }
    throw Error('Failed initializing Firebase Admin SDK');
};
