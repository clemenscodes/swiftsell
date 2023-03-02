import { readBuildtimeEnv } from './env';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apikey: readBuildtimeEnv('FIREBASE_API_KEY'),
    authDomain: readBuildtimeEnv('FIREBASE_AUTH_DOMAIN'),
    projectId: readBuildtimeEnv('FIREBASE_PROJECT_ID'),
    storageBucket: readBuildtimeEnv('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: readBuildtimeEnv('FIREBASE_MESSAGING_SENDER_ID'),
    appId: readBuildtimeEnv('FIREBASE_APP_ID'),
};

export const app = initializeApp(firebaseConfig);
