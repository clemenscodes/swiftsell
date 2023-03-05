import { authedHandler } from './authedHandler';
import { onLogoutRequestError } from '@utils';
import { type NextApiHandler } from 'next';
import { unsetAuthCookies } from 'next-firebase-auth';

export const logoutHandler: NextApiHandler = async (req, res) => {
    return await authedHandler(req, res, async () => {
        try {
            await unsetAuthCookies(req, res);
        } catch (e) {
            onLogoutRequestError(e);
            return res.status(500).json({ error: 'Unexpected error' });
        }
        return res.status(200).json({ success: true });
    });
};
