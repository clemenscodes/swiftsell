import DropdownMenuItem from './dropdown-menu-item';
import { Content, Root } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <Content>
                    <DropdownMenuItem />
                </Content>
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
