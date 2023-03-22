import { Icons } from './icons';
import { render } from '@testing-library/react';

describe('Icons', () => {
    it('should render Icons.Sun successfully', () => {
        const { baseElement } = render(<Icons.Sun />);
        expect(baseElement).toBeTruthy();
    });
    it('should render Icons.Moon successfully', () => {
        const { baseElement } = render(<Icons.Moon />);
        expect(baseElement).toBeTruthy();
    });
    it('should render Icons.Logo successfully', () => {
        const { baseElement } = render(<Icons.Logo />);
        expect(baseElement).toBeTruthy();
    });
    it('should render Icons.Laptop successfully', () => {
        const { baseElement } = render(<Icons.Laptop />);
        expect(baseElement).toBeTruthy();
    });
});
