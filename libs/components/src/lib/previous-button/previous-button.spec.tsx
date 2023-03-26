import PreviousButton from './previous-button';
import { render } from '@testing-library/react';

describe('PreviousButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PreviousButton enabled={false} onClick={function (): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(baseElement).toBeTruthy();
    });
});
