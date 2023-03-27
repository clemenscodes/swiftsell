import { Dialog } from './dialog';
import { render } from '@testing-library/react';

describe('Dialog', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Dialog />);
        expect(baseElement).toBeTruthy();
    });
});
