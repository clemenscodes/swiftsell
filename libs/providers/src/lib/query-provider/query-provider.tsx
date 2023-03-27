import { Hydrate, QueryClientProvider, QueryClient, DehydratedState } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface QueryProviderProps extends React.PropsWithChildren {
    dehydratedState: DehydratedState;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children, dehydratedState, ...props }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>{children}</Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default QueryProvider;
