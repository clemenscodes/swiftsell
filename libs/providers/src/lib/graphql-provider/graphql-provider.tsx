import { Provider, createClient } from 'urql';

const endpoint =
    (process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string) ||
    'http://localhost:9090';

const url = `${endpoint}/v1/graphql`;

export const client = createClient({ url });

/* eslint-disable-next-line */
export interface GraphqlProviderProps extends React.PropsWithChildren {}

export function GraphqlProvider({ children, ...props }: GraphqlProviderProps) {
    return <Provider value={client}>{children}</Provider>;
}

export default GraphqlProvider;
