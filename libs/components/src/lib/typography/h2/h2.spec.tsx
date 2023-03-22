import H2 from './h2';
import { render } from '@testing-library/react';

describe('H2', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<H2 />);
        expect(baseElement).toBeTruthy();
    });
});
