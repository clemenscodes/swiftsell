import Carousel from './carousel';
import { render } from '@testing-library/react';

describe('Carousel', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Carousel />);
        expect(baseElement).toBeTruthy();
    });
});
