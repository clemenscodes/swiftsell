import DropdownMenuContent from './dropdown-menu-content';
import { Root } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuContent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <DropdownMenuContent />
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
