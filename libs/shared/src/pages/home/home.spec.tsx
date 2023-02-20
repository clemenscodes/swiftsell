import { render } from '@testing-library/react';
import Home from './home';
jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Home />);
        expect(baseElement).toBeTruthy();
    });
});
