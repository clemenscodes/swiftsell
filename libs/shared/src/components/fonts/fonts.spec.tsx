import { render } from '@testing-library/react';

import Fonts from './fonts';

describe('Fonts', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Fonts />);
        expect(baseElement).toBeTruthy();
    });
});
