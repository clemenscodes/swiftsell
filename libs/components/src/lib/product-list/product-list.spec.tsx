import ProductList from './product-list';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, act, waitFor } from '@testing-library/react';

describe('ProductList', () => {
    it('should render successfully', async () => {
        await act(async () => {
            const queryClient = new QueryClient();
            const wrapper = ({ children }: React.PropsWithChildren) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            );
            const { baseElement } = render(<ProductList />, { wrapper });
            await waitFor(() => expect(baseElement).toBeTruthy());
        });
    });
});
