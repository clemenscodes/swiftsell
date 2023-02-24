import { render } from '@testing-library/react';

import TailwindIndicator from './tailwind-indicator';

describe('TailwindIndicator', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TailwindIndicator />);
        expect(baseElement).toBeTruthy();
    });
});
