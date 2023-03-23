import About from './about';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('About', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<About />);
        expect(baseElement).toBeTruthy();
    });
});
