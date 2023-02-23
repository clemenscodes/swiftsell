import { act, renderHook } from '@testing-library/react';

import usePrefix from './use-prefix';

describe('usePrefix', () => {
    it('should render successfully', () => {
        const { result } = renderHook(() => usePrefix());

        expect(result.current.prefix).toBe('');

        act(() => {
            result.current.getPrefix();
        });

        expect(result.current.prefix).toBe('');
    });
});
