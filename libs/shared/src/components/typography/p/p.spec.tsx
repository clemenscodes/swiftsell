import { render } from '@testing-library/react';

import P from './p';

describe('P', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<P />);
        expect(baseElement).toBeTruthy();
    });
});
