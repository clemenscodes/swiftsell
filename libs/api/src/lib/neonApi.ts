import { authedHandler } from './authedHandler';
import { listProjects } from '@db/web';
import { onLoginRequestError } from '@utils';
import { type NextApiHandler } from 'next';

export const neonApi: NextApiHandler = async (req, res) => {
    return await authedHandler(req, res, async () => {
        try {
            const projects = await listProjects();
            return res.status(200).json({ projects });
        } catch (e) {
            onLoginRequestError(e);
            return res.status(500).json({ error: 'Unexpected error' });
        }
    });
};
