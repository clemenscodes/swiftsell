import { render } from '@testing-library/react';

import Small from './small';

describe('Small', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Small />);
        expect(baseElement).toBeTruthy();
    });
});
