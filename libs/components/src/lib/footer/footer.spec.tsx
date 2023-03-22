import Footer from './footer';
import { render } from '@testing-library/react';

describe('Footer', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Footer />);
        expect(baseElement).toBeTruthy();
    });
});
