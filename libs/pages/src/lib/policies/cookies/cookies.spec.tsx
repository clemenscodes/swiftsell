import Cookies from './cookies';
import { render } from '@testing-library/react';

describe('Cookies', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Cookies />);
        expect(baseElement).toBeTruthy();
    });
});
