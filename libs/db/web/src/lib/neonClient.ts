import { NeonClient } from 'neon-sdk';

export const neonClient = new NeonClient({
    TOKEN: process.env.NEON_API_KEY,
});
