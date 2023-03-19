import { Client, ClientOptions } from 'urql';

class MockGraphQLClient extends Client {
    constructor(public options: ClientOptions) {
        super(options);
    }
}

const mockClient = new MockGraphQLClient({
    url: 'http://localhost:3000/graphql',
});

mockClient.createRequestOperation = jest.fn();
mockClient.executeQuery = jest.fn();
mockClient.executeMutation = jest.fn();
mockClient.executeSubscription = jest.fn();
mockClient.mutation = jest.fn();
mockClient.query = jest.fn();
mockClient.readQuery = jest.fn();
mockClient.reexecuteOperation = jest.fn();
mockClient.subscribeToDebugTarget = jest.fn();
mockClient.subscription = jest.fn();

export const mockGraphQLClient = mockClient;
