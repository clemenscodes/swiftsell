import Auth from './auth';
import { render } from '@testing-library/react';

describe('Auth', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Auth />);
        expect(baseElement).toBeTruthy();
    });
});
