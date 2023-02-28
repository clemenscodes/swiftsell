import RobotoCondensed from './robotoCondensed';
import { render } from '@testing-library/react';

describe('Fonts', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<RobotoCondensed />);
        expect(baseElement).toBeTruthy();
    });
});
