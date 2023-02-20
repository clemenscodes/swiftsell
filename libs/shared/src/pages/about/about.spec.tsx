import { render } from '@testing-library/react';
import About from './about';
jest.mock('next/router', () => require('next-router-mock'));

describe('About', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<About />);
        expect(baseElement).toBeTruthy();
    });
});
