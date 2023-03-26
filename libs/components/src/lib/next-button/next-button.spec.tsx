import NextButton from './next-button';
import { render } from '@testing-library/react';

describe('NextButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <NextButton
                enabled={false}
                onClick={function (): void {
                    throw new Error('Function not implemented.');
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
