import DropdownMenuTrigger from './dropdown-menu-trigger';
import { render } from '@testing-library/react';

describe('DropdownMenuTrigger', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuTrigger />);
        expect(baseElement).toBeTruthy();
    });
});
