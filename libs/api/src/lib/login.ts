import { authedHandler } from './authedHandler';
import { onLoginRequestError } from '@utils';
import { type NextApiHandler } from 'next';
import { setAuthCookies } from 'next-firebase-auth';

export const loginHandler: NextApiHandler = async (req, res) => {
    return await authedHandler(req, res, async () => {
        try {
            await setAuthCookies(req, res);
        } catch (e) {
            onLoginRequestError(e);
            return res.status(500).json({ error: 'Unexpected error: ' + e });
        }
        return res.status(200).json({ success: true });
    });
};
