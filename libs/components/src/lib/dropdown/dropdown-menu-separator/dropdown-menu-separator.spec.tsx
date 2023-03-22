import DropdownMenuSeparator from './dropdown-menu-separator';
import { render } from '@testing-library/react';

describe('DropdownMenuSeparator', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuSeparator />);
        expect(baseElement).toBeTruthy();
    });
});
