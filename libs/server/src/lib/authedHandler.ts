import { initAdminSDK } from './initAdminSDK';
import { initAuth } from '@utils';
import {
    type NextApiRequest,
    type NextApiHandler,
    type NextApiResponse,
} from 'next';

export const authedHandler = async (
    req: NextApiRequest,
    res: NextApiResponse,
    fn: NextApiHandler
) => {
    initAdminSDK();
    initAuth();
    return await fn(req, res);
};
