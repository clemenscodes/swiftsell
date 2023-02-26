import DropdownMenuCheckboxItem from './dropdown-menu-checkbox-item';
import { render } from '@testing-library/react';

describe('DropdownMenuCheckboxItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuCheckboxItem />);
        expect(baseElement).toBeTruthy();
    });
});
