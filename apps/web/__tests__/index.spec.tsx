import Index from '../pages/index';
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('next/router', () => require('next-router-mock'));

describe('Index', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Index />);
        expect(baseElement).toBeTruthy();
    });
});
