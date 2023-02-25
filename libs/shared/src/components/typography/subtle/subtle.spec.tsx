import Subtle from './subtle';
import { render } from '@testing-library/react';

describe('Subtle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Subtle />);
        expect(baseElement).toBeTruthy();
    });
});
