import Products from './products';
import { mockGraphQLClient } from '@test/lib/mockGraphQLClient';
import { render } from '@testing-library/react';
import { Provider } from 'urql';

describe('Products', () => {
    it('should render successfully', () => {
        const wrapper = ({ children }: React.PropsWithChildren) => (
            <Provider value={mockGraphQLClient}>{children}</Provider>
        );
        const { baseElement } = render(<Products />, { wrapper });
        expect(baseElement).toBeTruthy();
    });
});
