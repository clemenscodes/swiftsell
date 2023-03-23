import Search from './search';
import { render } from '@testing-library/react';

describe('Search', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Search />);
        expect(baseElement).toBeTruthy();
    });
});
