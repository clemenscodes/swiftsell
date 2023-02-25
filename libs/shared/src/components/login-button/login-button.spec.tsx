import LoginButton from './login-button';
import { render } from '@testing-library/react';

describe('LoginButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LoginButton />);
        expect(baseElement).toBeTruthy();
    });
});
