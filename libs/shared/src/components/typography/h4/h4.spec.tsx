import { render } from '@testing-library/react';

import H4 from './h4';

describe('H4', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<H4 />);
        expect(baseElement).toBeTruthy();
    });
});
