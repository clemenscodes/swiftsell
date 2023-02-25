import Small from './small';
import { render } from '@testing-library/react';

describe('Small', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Small />);
        expect(baseElement).toBeTruthy();
    });
});
