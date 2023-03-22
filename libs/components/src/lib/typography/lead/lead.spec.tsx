import Lead from './lead';
import { render } from '@testing-library/react';

describe('Lead', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Lead />);
        expect(baseElement).toBeTruthy();
    });
});
