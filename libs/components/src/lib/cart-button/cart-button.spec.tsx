import CartButton from './cart-button';
import { render } from '@testing-library/react';

describe('CartButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<CartButton />);
        expect(baseElement).toBeTruthy();
    });
});
