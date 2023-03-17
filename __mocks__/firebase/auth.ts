type FirebaseAuthModuleMock = {
    getAuth: jest.Mock;
    createUserWithEmailAndPassword: jest.Mock;
    onIdTokenChanged: jest.Mock;
    signOut: jest.Mock;
};

const firebaseAuthMock = jest.createMockFromModule<FirebaseAuthModuleMock>('firebase/auth');

const mockOnIdTokenChangedUnsubscribe = jest.fn();
const createUserWithEmailAndPassword = jest.fn();
const getAuth = jest.fn();
const mockOnIdTokenChanged = jest.fn(() => mockOnIdTokenChangedUnsubscribe);
const mockSignOut = jest.fn(() => Promise.resolve());

firebaseAuthMock.onIdTokenChanged = mockOnIdTokenChanged;
firebaseAuthMock.signOut = mockSignOut;
firebaseAuthMock.getAuth = getAuth;
firebaseAuthMock.createUserWithEmailAndPassword = createUserWithEmailAndPassword;

module.exports = firebaseAuthMock;
