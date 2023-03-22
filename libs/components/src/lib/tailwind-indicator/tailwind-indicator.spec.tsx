import TailwindIndicator from './tailwind-indicator';
import { render } from '@testing-library/react';

describe('TailwindIndicator', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TailwindIndicator />);
        expect(baseElement).toBeTruthy();
    });
});
