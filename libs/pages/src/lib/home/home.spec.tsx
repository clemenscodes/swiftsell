import Home from './home';
import { mockGraphQLClient } from '@test/lib/mockGraphQLClient';
import { render } from '@testing-library/react';
import { Provider } from 'urql';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    it('should render successfully', async () => {
        const wrapper = ({ children }: React.PropsWithChildren) => (
            <Provider value={mockGraphQLClient}>{children}</Provider>
        );
        const { baseElement } = render(<Home />, { wrapper });
        expect(baseElement).toBeDefined();
    });
});
