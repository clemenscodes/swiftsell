const withAuthUser = jest.fn(
    () => (wrappedComponent: unknown) => wrappedComponent
);
export default withAuthUser;
