import getMockAuthUser from '../../libs/test/src/lib/getMockAuthUser';

const verifyIdToken = jest.fn(async (token) => {
    if (!token) {
        throw new Error('verifyIdToken requires a token');
    }
    return getMockAuthUser();
});

export default verifyIdToken;
