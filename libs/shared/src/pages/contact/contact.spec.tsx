import Contact from './contact';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('Contact', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Contact />);
        expect(baseElement).toBeTruthy();
    });
});
