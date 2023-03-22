import P from './p';
import { render } from '@testing-library/react';

describe('P', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<P />);
        expect(baseElement).toBeTruthy();
    });
});
