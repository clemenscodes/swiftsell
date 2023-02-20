import { render } from '@testing-library/react';
import Contact from './contact';
jest.mock('next/router', () => require('next-router-mock'));

describe('Contact', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Contact />);
        expect(baseElement).toBeTruthy();
    });
});
