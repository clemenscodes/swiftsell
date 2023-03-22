import InlineCode from './inline-code';
import { render } from '@testing-library/react';

describe('InlineCode', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<InlineCode />);
        expect(baseElement).toBeTruthy();
    });
});
