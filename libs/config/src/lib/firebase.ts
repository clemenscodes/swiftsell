import { FirebaseOptions } from 'firebase/app';

interface IFirebaseOptions extends FirebaseOptions {
    apiKey: string;
}

export const getFirebaseConfig = () => {
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (!apiKey) throw Error('Firebase API key is not defined');
    const firebaseConfig: IFirebaseOptions = {
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        apiKey,
    };
    return firebaseConfig;
};
