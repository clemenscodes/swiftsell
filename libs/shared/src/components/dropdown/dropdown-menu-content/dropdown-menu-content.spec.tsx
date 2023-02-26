import DropdownMenuContent from './dropdown-menu-content';
import { render } from '@testing-library/react';

describe('DropdownMenuContent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuContent />);
        expect(baseElement).toBeTruthy();
    });
});
