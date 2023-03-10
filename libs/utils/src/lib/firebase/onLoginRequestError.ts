import { error } from '../error';

export const onLoginRequestError = (err: unknown) => {
    error(err);
};
