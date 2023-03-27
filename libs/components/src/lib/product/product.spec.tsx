import Product from './product';
import { mockProduct } from '@test/lib/productMock';
import { render } from '@testing-library/react';

describe('Product', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Product product={mockProduct} />);
        expect(baseElement).toBeTruthy();
    });
});
