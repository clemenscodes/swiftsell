import Home from './home';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    it('should render successfully', async () => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }: React.PropsWithChildren) => (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        );
        const { baseElement } = render(<Home />, { wrapper });
        expect(baseElement).toBeDefined();
    });
});
