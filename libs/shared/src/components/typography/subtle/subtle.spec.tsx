import { render } from '@testing-library/react';

import Subtle from './subtle';

describe('Subtle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Subtle />);
        expect(baseElement).toBeTruthy();
    });
});
