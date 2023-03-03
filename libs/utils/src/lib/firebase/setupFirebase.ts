import { isBrowser } from '../isBrowser';
import { getFirebaseConfig } from '@config';
import { initializeApp, getApp, getApps, FirebaseOptions } from 'firebase/app';

const setupFirebase = () => {
    if (isBrowser()) {
        if (getApps().length) return getApp();
        // console.log({ firebaseConfig });
        return initializeApp(getFirebaseConfig as FirebaseOptions);
    }
};

export const app = setupFirebase();
