import { Command } from './command';
import { render } from '@testing-library/react';

describe('Command', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Command />);
        expect(baseElement).toBeTruthy();
    });
});
