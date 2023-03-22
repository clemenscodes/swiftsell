import Pwa from './pwa';
import { render } from '@testing-library/react';

describe('Pwa', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Pwa />);
        expect(baseElement).toBeTruthy();
    });
});
