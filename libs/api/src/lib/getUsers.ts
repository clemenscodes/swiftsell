import { authedHandler } from './authedHandler';
import { getAllUsers } from '@db/web';
import { onLoginRequestError } from '@utils';
import { type NextApiHandler } from 'next';

export const getUsersHandler: NextApiHandler = async (req, res) => {
    return await authedHandler(req, res, async () => {
        try {
            const users = await getAllUsers();
            return res.status(200).json({ users });
        } catch (e) {
            onLoginRequestError(e);
            return res.status(500).json({ error: 'Unexpected error' });
        }
    });
};
