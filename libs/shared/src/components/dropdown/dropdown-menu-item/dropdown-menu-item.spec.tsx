import DropdownMenuItem from './dropdown-menu-item';
import { render } from '@testing-library/react';

describe('DropdownMenuItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DropdownMenuItem />);
        expect(baseElement).toBeTruthy();
    });
});
