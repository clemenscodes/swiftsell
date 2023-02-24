import { render } from '@testing-library/react';

import ModeToggle from './mode-toggle';

describe('ModeToggle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ModeToggle />);
        expect(baseElement).toBeTruthy();
    });
});
