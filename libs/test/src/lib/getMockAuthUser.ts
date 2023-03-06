const mockFirebaseUser = {
    displayName: 'Banana Manana',
    // ... other fields from firebaseUser that you may use
};

const getMockAuthUser = (isLoggedIn = true) => ({
    id: isLoggedIn ? 'abcd1234' : null,
    email: isLoggedIn ? 'banana@banana.com' : null,
    emailVerified: isLoggedIn,
    getIdToken: jest.fn(async () => (isLoggedIn ? 'i_am_a_token' : null)),
    clientInitialized: isLoggedIn,
    firebaseUser: isLoggedIn ? mockFirebaseUser : null,
    signOut: jest.fn(),
    serialize: jest.fn(() => 'serialized_auth_user'),
});
export default getMockAuthUser;
