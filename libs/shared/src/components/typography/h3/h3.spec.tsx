import { render } from '@testing-library/react';

import H3 from './h3';

describe('H3', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<H3 />);
        expect(baseElement).toBeTruthy();
    });
});
