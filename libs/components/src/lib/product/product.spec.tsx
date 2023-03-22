import Product from './product';
import { ProductProps } from './product';
import { render } from '@testing-library/react';

const mockProduct: ProductProps['product'] = {
    id: 0,
    name: 'mockProduct',
    price: 20,
    description: 'Mock description',
    image: '/mockImageUrl',
};

describe('Product', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Product product={mockProduct} />);
        expect(baseElement).toBeTruthy();
    });
});
