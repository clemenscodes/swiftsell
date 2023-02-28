import DropdownMenuCheckboxItem from './dropdown-menu-checkbox-item';
import { Content, Root } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuCheckboxItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <Content>
                    <DropdownMenuCheckboxItem />
                </Content>
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
