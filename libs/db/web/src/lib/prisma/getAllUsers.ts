import { WebClient } from './webClient';

export const getAllUsers = async () => {
    const users = await WebClient.users.findMany();
    return users;
};
