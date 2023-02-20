import { render } from '@testing-library/react';
import Navbar from './navbar';
jest.mock('next/router', () => require('next-router-mock'));

describe('Navbar', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Navbar />);
        expect(baseElement).toBeTruthy();
    });
});
