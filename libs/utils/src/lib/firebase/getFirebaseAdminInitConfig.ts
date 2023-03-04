import { isTrustedEnv } from '@config';

interface AdminConfig {
    credential: {
        projectId: string;
        clientEmail: string;
        privateKey: string;
    };
    databaseURL: string;
}

const config: AdminConfig = {
    credential: {
        projectId:
            (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string) || 'dummy',
        clientEmail: (process.env.FIREBASE_CLIENT_EMAIL as string) || 'dummy',
        privateKey:
            ((process.env.FIREBASE_PRIVATE_KEY
                ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
                : undefined) as string) || 'dummy',
    },
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL as string,
};

export const firebaseAdminInitConfig = !isTrustedEnv ? config : undefined;
