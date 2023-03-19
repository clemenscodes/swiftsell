import { App } from 'firebase-admin/app';

type FirebaseAdminAppModuleMock = {
    getApps: jest.Mock<App[]>;
    getApp: jest.Mock<App | undefined>;
};

const firebaseAdminApp = jest.createMockFromModule<FirebaseAdminAppModuleMock>('firebase-admin/app');

firebaseAdminApp.getApps = jest.fn(() => []);
firebaseAdminApp.getApp = jest.fn(() => undefined);

module.exports = firebaseAdminApp;
