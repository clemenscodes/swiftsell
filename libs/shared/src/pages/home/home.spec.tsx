import Home from './home';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    it('should render successfully', async () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('home')).toBeTruthy();
    });
});
