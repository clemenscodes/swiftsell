import { FirebaseApp } from 'firebase/app';

type FirebaseAppModuleMock = {
    getApps: jest.Mock<FirebaseApp[]>;
};

const firebaseAppMock =
    jest.createMockFromModule<FirebaseAppModuleMock>('firebase/app');

firebaseAppMock.getApps = jest.fn(() => []);

module.exports = firebaseAppMock;
