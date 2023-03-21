import type { NextApiHandler } from 'next';
import NextAuth from 'next-auth';

const auth: NextApiHandler = async (req, res) => {
    const providers = [];
    return await NextAuth(req, res, {
        providers,
        secret: (process.env.NEXTAUTH_SECRET as string) || 'super-duper-very-secret-string-that-can-never-be-hacked',
    });
};

export default auth;
