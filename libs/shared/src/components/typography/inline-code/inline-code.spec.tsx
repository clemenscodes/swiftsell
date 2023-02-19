import { render } from '@testing-library/react';

import InlineCode from './inline-code';

describe('InlineCode', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<InlineCode />);
        expect(baseElement).toBeTruthy();
    });
});
