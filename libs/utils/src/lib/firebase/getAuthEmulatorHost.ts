import { enableEmulator } from '../enableEmulator';
import { isProduction } from '../isProduction';

export const getAuthEmulatorHost = () => {
    if (isProduction() || !enableEmulator()) {
        return undefined;
    }
    const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST || 'localhost';
    const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT || 9099;
    const url = `${host}:${port}`;
    return url;
};
