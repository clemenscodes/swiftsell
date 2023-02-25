import { DropdownMenu } from './dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenu', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenu />);
        expect(baseElement).toBeTruthy();
    });
});
