import FontProvider from './font-provider';
import { render } from '@testing-library/react';

describe('FontProvider', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <FontProvider>
                <div>Child</div>
            </FontProvider>
        );
        expect(baseElement).toBeTruthy();
    });
});
