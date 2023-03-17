import { FirebaseApp } from 'firebase/app';

type FirebaseAppModuleMock = {
    getApps: jest.Mock<FirebaseApp[]>;
    getApp: jest.Mock<FirebaseApp | undefined>;
};

const firebaseAppMock = jest.createMockFromModule<FirebaseAppModuleMock>('firebase/app');

firebaseAppMock.getApps = jest.fn(() => []);
firebaseAppMock.getApp = jest.fn(() => undefined);

module.exports = firebaseAppMock;
