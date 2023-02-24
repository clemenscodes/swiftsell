import { render } from '@testing-library/react';

import SetTheme from './set-theme';

describe('SetTheme', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SetTheme />);
        expect(baseElement).toBeTruthy();
    });
});
