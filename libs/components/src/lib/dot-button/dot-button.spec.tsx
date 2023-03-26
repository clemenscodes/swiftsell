import DotButton from './dot-button';
import { render } from '@testing-library/react';

describe('DotButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DotButton />);
        expect(baseElement).toBeTruthy();
    });
});
