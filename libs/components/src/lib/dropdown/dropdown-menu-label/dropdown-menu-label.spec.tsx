import DropdownMenuLabel from './dropdown-menu-label';
import { render } from '@testing-library/react';

describe('DropdownMenuLabel', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuLabel />);
        expect(baseElement).toBeTruthy();
    });
});
