import { error } from '../error';

export const onLogoutRequestError = (err: unknown) => {
    error(err);
};
