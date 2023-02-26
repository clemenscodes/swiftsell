import Navbar from './navbar';
import { render } from '@testing-library/react';
jest.mock('next/router', () => require('next-router-mock'));

describe('Navbar', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Navbar />);
        expect(baseElement).toBeTruthy();
    });
});
