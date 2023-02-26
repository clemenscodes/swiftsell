import DropdownMenuRadioItem from './dropdown-menu-radio-item';
import { render } from '@testing-library/react';

describe('DropdownMenuRadioItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuRadioItem />);
        expect(baseElement).toBeTruthy();
    });
});
