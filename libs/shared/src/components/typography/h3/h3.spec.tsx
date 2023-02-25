import H3 from './h3';
import { render } from '@testing-library/react';

describe('H3', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<H3 />);
        expect(baseElement).toBeTruthy();
    });
});
