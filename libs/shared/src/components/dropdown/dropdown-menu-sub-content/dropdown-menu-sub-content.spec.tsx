import DropdownMenuSubContent from './dropdown-menu-sub-content';
import { Content, Root } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuSubContent', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <Content>
                    <DropdownMenuSubContent />
                </Content>
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
