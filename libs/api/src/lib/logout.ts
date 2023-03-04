import { initAuth, onLogoutRequestError } from '@utils';
import { type NextApiHandler } from 'next';
import { unsetAuthCookies } from 'next-firebase-auth';

initAuth();

export const logoutHandler: NextApiHandler = async (req, res) => {
    try {
        await unsetAuthCookies(req, res);
    } catch (e) {
        onLogoutRequestError(e);
        return res.status(500).json({ error: 'Unexpected error.' });
    }
    return res.status(200).json({ success: true });
};
