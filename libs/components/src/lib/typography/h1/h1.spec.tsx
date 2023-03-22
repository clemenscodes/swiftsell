import H1 from './h1';
import { render } from '@testing-library/react';

describe('H1', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<H1 />);
        expect(baseElement).toBeTruthy();
    });
});
