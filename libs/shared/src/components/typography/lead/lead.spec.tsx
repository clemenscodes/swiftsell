import { render } from '@testing-library/react';

import Lead from './lead';

describe('Lead', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Lead />);
        expect(baseElement).toBeTruthy();
    });
});
