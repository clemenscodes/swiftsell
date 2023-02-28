import DropdownMenuSubTrigger from './dropdown-menu-sub-trigger';
import { Content, Root } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuSubTrigger', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <Content>
                    <DropdownMenuSubTrigger />
                </Content>
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
