import ProfileButton from './profile-button';
import { render } from '@testing-library/react';

describe('ProfileButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProfileButton />);
        expect(baseElement).toBeTruthy();
    });
});
