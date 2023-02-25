import Large from './large';
import { render } from '@testing-library/react';

describe('Large', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Large />);
        expect(baseElement).toBeTruthy();
    });
});
