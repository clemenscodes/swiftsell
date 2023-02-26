import DropdownMenuSubContent from './dropdown-menu-sub-content';
import { render } from '@testing-library/react';

describe('DropdownMenuSubContent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuSubContent />);
        expect(baseElement).toBeTruthy();
    });
});
