import { Toaster } from './toaster';
import { render } from '@testing-library/react';

describe('Toaster', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Toaster />);
        expect(baseElement).toBeTruthy();
    });
});
