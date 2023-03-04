import { initAdminSDK } from './initAdminSDK';
import { initAuth, onLoginRequestError } from '@utils';
import { type NextApiHandler } from 'next';
import { setAuthCookies } from 'next-firebase-auth';

initAdminSDK();
initAuth();

export const loginHandler: NextApiHandler = async (req, res) => {
    try {
        await setAuthCookies(req, res);
    } catch (e) {
        onLoginRequestError(e);
        return res.status(500).json({ error: 'Unexpected error.' });
    }
    return res.status(200).json({ success: true });
};
