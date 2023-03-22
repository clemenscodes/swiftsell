import ProductList from './product-list';
import { mockGraphQLClient } from '@test/lib/mockGraphQLClient';
import { render, act, waitFor } from '@testing-library/react';
import { Provider } from 'urql';

describe('ProductList', () => {
    it('should render successfully', async () => {
        const wrapper = ({ children }: React.PropsWithChildren) => (
            <Provider value={mockGraphQLClient}>{children}</Provider>
        );
        await act(async () => {
            const { baseElement } = render(<ProductList />, { wrapper });
            await waitFor(() => expect(baseElement).toBeTruthy());
        });
    });
});
