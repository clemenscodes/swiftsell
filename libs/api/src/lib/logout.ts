import { initAuth } from '@utils';
import { type NextApiRequest, type NextApiResponse } from 'next';
import { unsetAuthCookies } from 'next-firebase-auth';

initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await unsetAuthCookies(req, res);
    } catch (e) {
        return res.status(500).json({ error: 'Unexpected error.' });
    }
    return res.status(200).json({ success: true });
};

export default handler;
