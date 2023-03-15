import GraphqlProvider from './graphql-provider';
import { render } from '@testing-library/react';

describe('GraphqlProvider', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<GraphqlProvider />);
        expect(baseElement).toBeTruthy();
    });
});
