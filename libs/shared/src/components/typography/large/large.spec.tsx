import { render } from '@testing-library/react';

import Large from './large';

describe('Large', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Large />);
        expect(baseElement).toBeTruthy();
    });
});
