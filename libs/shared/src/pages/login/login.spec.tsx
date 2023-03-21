import { render } from '@testing-library/react';
import { LoginProps } from '@types';
import { getApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ComponentType } from 'react';

jest.mock('firebase/app');
jest.mock('firebase/auth');

describe('Auth', () => {
    let Login: ComponentType<LoginProps>;

    beforeEach(() => {
        getAuth as jest.Mock;
        getApp as jest.Mock;
        createUserWithEmailAndPassword as jest.Mock;
        Login = require('./login').default as typeof Login;
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should render successfully', () => {
        const { baseElement } = render(<Login name={''} email={''} password={''} confirmPassword={''} />);
        expect(baseElement).toBeTruthy();
    });
});
