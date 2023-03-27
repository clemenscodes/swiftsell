import Profile from './profile';
import { render } from '@testing-library/react';

describe('Profile', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Profile />);
        expect(baseElement).toBeTruthy();
    });
});
