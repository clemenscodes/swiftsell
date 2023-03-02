import { firebaseConfig } from '@config';
import { initializeApp, getApp, getApps } from 'firebase/app';

const setupFirebase = () => {
    if (typeof window !== undefined) {
        if (getApps().length) return getApp();
        return initializeApp(firebaseConfig);
    }
};

export const app = setupFirebase();
