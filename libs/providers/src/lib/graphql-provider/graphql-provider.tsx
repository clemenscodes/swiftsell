import { clientUrl } from '@config';
import { Provider, createClient } from 'urql';

export const client = createClient({ url: clientUrl });

/* eslint-disable-next-line */
export interface GraphqlProviderProps extends React.PropsWithChildren {}

export function GraphqlProvider({ children, ...props }: GraphqlProviderProps) {
    return <Provider value={client}>{children}</Provider>;
}

export default GraphqlProvider;
