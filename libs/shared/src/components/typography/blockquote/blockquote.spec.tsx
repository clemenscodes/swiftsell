import Blockquote from './blockquote';
import { render } from '@testing-library/react';

describe('Blockquote', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Blockquote />);
        expect(baseElement).toBeTruthy();
    });
});
