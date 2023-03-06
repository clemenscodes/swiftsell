import useAuthUser from './useAuthUser';
import verifyIdToken from './verifyIdToken';
import withAuthUser from './withAuthUser';
import withAuthUserSSR from './withAuthUserSSR';
import withAuthUserTokenSSR from './withAuthUserTokenSSR';

module.exports = {
    init: jest.fn(),
    withAuthUser,
    useAuthUser,
    withAuthUserSSR,
    withAuthUserTokenSSR,
    setAuthCookies: jest.fn(),
    unsetAuthCookies: jest.fn(),
    verifyIdToken,
    AuthAction: {
        RENDER: 'render',
        SHOW_LOADER: 'showLoader',
        RETURN_NULL: 'returnNull',
        REDIRECT_TO_LOGIN: 'redirectToLogin',
        REDIRECT_TO_APP: 'redirectToApp',
    },
};
