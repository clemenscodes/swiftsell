import { render } from '@testing-library/react';

import Blockquote from './blockquote';

describe('Blockquote', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Blockquote />);
        expect(baseElement).toBeTruthy();
    });
});
