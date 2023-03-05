import SignedIn from './signed-in';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('SignedIn', () => {
    it('should render successfully', () => {
        // const { baseElement } = render(<SignedIn />);
        // expect(baseElement).toBeTruthy();
    });
});
