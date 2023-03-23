import ProductDetails from './product-details';
import { mockProduct } from '@test/lib/productMock';
import { render } from '@testing-library/react';

describe('ProductDetails', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProductDetails product={mockProduct} />);
        expect(baseElement).toBeTruthy();
    });
});
