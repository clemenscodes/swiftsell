import Firebase from './firebase';
import { render } from '@testing-library/react';

describe('Firebase', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Firebase />);
        expect(baseElement).toBeTruthy();
    });
});
