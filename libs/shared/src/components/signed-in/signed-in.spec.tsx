import { SignedInProps } from './signed-in';
import getMockAuthUser from '@test/lib/getMockAuthUser';
import { render } from '@testing-library/react';
import { withAuthUser, useAuthUser } from 'next-firebase-auth';
import { ComponentType } from 'react';

jest.mock('next-firebase-auth');
jest.mock('next/router', () => require('next-router-mock'));

describe('SignedIn', () => {
    let SignedIn: ComponentType<SignedInProps>;

    beforeEach(() => {
        (useAuthUser as jest.Mock).mockReturnValue(getMockAuthUser());
        (withAuthUser as jest.Mock).mockImplementation(
            () => (wrappedComponent: typeof SignedIn) => wrappedComponent
        );
        SignedIn = require('./signed-in').default as typeof SignedIn;
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should render successfully', () => {
        const { baseElement } = render(<SignedIn />);
        expect(baseElement).toBeTruthy();
    });
});
