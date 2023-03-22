import List from './list';
import { render } from '@testing-library/react';

describe('List', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<List />);
        expect(baseElement).toBeTruthy();
    });
});
