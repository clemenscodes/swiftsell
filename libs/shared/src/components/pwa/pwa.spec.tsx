import { render } from '@testing-library/react';

import Pwa from './pwa';

describe('Pwa', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Pwa />);
        expect(baseElement).toBeTruthy();
    });
});
