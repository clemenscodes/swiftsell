import QueryProvider from './query-provider';
import { render } from '@testing-library/react';

describe('QueryProvider', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<QueryProvider dehydratedState={{ mutations: [], queries: [] }} />);
        expect(baseElement).toBeTruthy();
    });
});
