import Loader from './loader';
import { render } from '@testing-library/react';

describe('Loader', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Loader />);
        expect(baseElement).toBeTruthy();
    });
});
