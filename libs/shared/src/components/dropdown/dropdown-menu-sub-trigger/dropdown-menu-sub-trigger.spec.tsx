import DropdownMenuSubTrigger from './dropdown-menu-sub-trigger';
import { render } from '@testing-library/react';

describe('DropdownMenuSubTrigger', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuSubTrigger />);
        expect(baseElement).toBeTruthy();
    });
});
