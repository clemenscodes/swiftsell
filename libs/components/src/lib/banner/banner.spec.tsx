import Banner from './banner';
import { render } from '@testing-library/react';

describe('Banner', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Banner />);
        expect(baseElement).toBeTruthy();
    });
});
