import { act, waitFor } from '@testing-library/react';

export const fixTestingConsoleError = async () =>
    await act(() => waitFor(() => 0));


