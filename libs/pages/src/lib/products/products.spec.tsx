import Products from './products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

describe('Products', () => {
    it('should render successfully', () => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }: React.PropsWithChildren) => (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        );
        const { baseElement } = render(<Products />, { wrapper });
        expect(baseElement).toBeTruthy();
    });
});
