import DropdownMenuRadioItem from './dropdown-menu-radio-item';
import { Root, Content } from '@radix-ui/react-dropdown-menu';
import { render } from '@testing-library/react';

describe('DropdownMenuRadioItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Root>
                <Content>
                    <DropdownMenuRadioItem value={'2'} />
                </Content>
            </Root>
        );
        expect(baseElement).toBeTruthy();
    });
});
