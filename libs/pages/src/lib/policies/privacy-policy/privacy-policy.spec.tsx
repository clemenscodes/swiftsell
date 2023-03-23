import PrivacyPolicy from './privacy-policy';
import { render } from '@testing-library/react';

describe('PrivacyPolicy', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PrivacyPolicy />);
        expect(baseElement).toBeTruthy();
    });
});
