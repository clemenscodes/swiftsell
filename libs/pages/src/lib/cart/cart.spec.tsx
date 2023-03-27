import Cart from './cart';
import { render } from '@testing-library/react';

describe('Cart', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Cart />);
        expect(baseElement).toBeTruthy();
    });
});
