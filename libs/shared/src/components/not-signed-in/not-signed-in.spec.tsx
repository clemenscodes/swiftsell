import NotSignedIn from './not-signed-in';
import { render } from '@testing-library/react';

describe('NotSignedIn', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NotSignedIn />);
        expect(baseElement).toBeTruthy();
    });
});
