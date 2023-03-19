import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withAuthUserSSR = jest.fn(
    () => (getServerSidePropsFunc: GetServerSideProps) => (ctx: GetServerSidePropsContext) =>
        typeof getServerSidePropsFunc === 'function' ? getServerSidePropsFunc(ctx) : undefined
);
export default withAuthUserSSR;
