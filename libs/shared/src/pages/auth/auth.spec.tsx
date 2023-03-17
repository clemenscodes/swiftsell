import { render } from '@testing-library/react';
import { AuthProps } from '@types';
import { getApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ComponentType } from 'react';

jest.mock('firebase/app');
jest.mock('firebase/auth');

describe('Auth', () => {
    let Auth: ComponentType<AuthProps>;

    beforeEach(() => {
        getAuth as jest.Mock;
        getApp as jest.Mock;
        createUserWithEmailAndPassword as jest.Mock;
        Auth = require('./auth').default as typeof Auth;
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should render successfully', () => {
        const { baseElement } = render(<Auth name={''} email={''} password={''} confirmPassword={''} />);
        expect(baseElement).toBeTruthy();
    });
});
