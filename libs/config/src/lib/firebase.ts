import { readRuntimeEnv } from './env';
import { FirebaseOptions } from 'firebase/app';

export const firebaseConfig: FirebaseOptions = {
    apiKey: readRuntimeEnv('FIREBASE_API_KEY'),
    authDomain: readRuntimeEnv('FIREBASE_AUTH_DOMAIN'),
    projectId: readRuntimeEnv('FIREBASE_PROJECT_ID'),
    storageBucket: readRuntimeEnv('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: readRuntimeEnv('FIREBASE_MESSAGING_SENDER_ID'),
    appId: readRuntimeEnv('FIREBASE_APP_ID'),
};
