import TermsAndConditions from './terms-and-conditions';
import { render } from '@testing-library/react';

describe('TermsAndConditions', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TermsAndConditions />);
        expect(baseElement).toBeTruthy();
    });
});
