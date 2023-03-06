import { HomeProps } from './home';
import getMockAuthUser from '@test/lib/getMockAuthUser';
import { render, screen } from '@testing-library/react';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { ComponentType } from 'react';

jest.mock('next-firebase-auth');
jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    let HomeComponent: ComponentType<HomeProps>;
    beforeEach(async () => {
        (useAuthUser as jest.Mock).mockReturnValue(getMockAuthUser());
        (withAuthUser as jest.Mock).mockImplementation(
            () => (wrappedComponent: typeof HomeComponent) => wrappedComponent
        );
        HomeComponent = require('./home').default as typeof HomeComponent;
    });

    afterAll(() => {
        jest.resetAllMocks();
    });

    it('should render successfully', async () => {
        render(<HomeComponent />);
        expect(screen.getByText(getMockAuthUser().email!)).toBeInTheDocument();
    });
});
