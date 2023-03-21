import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth';

const auth: NextApiHandler = async (req, res) => {
    const providers = [];
    return await NextAuth(req, res, {
        providers,
    });
};

export default auth;
