import { isTrustedEnv } from '@config';
import { firebaseAdminInitConfig } from '@utils';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initAdminSDK = () => {
    if (getApps().length) return;
    if (isTrustedEnv) {
        // const project_id = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
        const cookie = process.env.COOKIE_SECRET_PREVIOUS;
        const mail = process.env.FIREBASE_CLIENT_EMAIL;
        // console.log({ project_id });
        console.log({ cookie });
        console.log({ mail });
        const { options } = initializeApp();
        console.log({ options });
        console.log('Initialized Firebase Admin SDK using ADC');
        // const { projectId, serviceAccountId } = options;
        // console.log({ projectId }, { serviceAccountId });
        return;
    }
    if (firebaseAdminInitConfig) {
        const { options } = initializeApp({
            ...firebaseAdminInitConfig,
            credential: cert({
                ...firebaseAdminInitConfig.credential,
            }),
        });
        // console.log({ options });
        // const { projectId, serviceAccountId } = options;
        // const cookie = process.env.COOKIE_SECRET_PREVIOUS;
        // console.log({ cookie });
        // console.log({ projectId }, { serviceAccountId });
        console.log('Initialized Firebase Admin SDK using certificate');
        return;
    }
    throw Error('Failed initializing Firebase Admin SDK');
};
