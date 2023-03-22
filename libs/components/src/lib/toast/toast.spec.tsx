import { Toast } from './toast';
import { ToastProvider } from '@radix-ui/react-toast';
import { render } from '@testing-library/react';

describe('Toast', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Toast />, { wrapper: ToastProvider });
        expect(baseElement).toBeTruthy();
    });
});
