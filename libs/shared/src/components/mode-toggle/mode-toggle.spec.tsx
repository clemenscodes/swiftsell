import ModeToggle from './mode-toggle';
import { render } from '@testing-library/react';

describe('ModeToggle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ModeToggle />);
        expect(baseElement).toBeTruthy();
    });
});
