import Faq from './faq';
import { render } from '@testing-library/react';

describe('Faq', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Faq />);
        expect(baseElement).toBeTruthy();
    });
});
