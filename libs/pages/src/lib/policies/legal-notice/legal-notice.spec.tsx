import LegalNotice from './legal-notice';
import { render } from '@testing-library/react';

describe('LegalNotice', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<LegalNotice />);
        expect(baseElement).toBeTruthy();
    });
});
