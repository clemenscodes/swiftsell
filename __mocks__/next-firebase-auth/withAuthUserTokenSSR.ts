import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withAuthUserTokenSSR = jest.fn(
    () => (getServerSidePropsFunc: GetServerSideProps) => (ctx: GetServerSidePropsContext) =>
        getServerSidePropsFunc(ctx)
);
export default withAuthUserTokenSSR;
