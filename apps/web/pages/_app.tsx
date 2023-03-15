import { initAuth } from '@utils';
import '../global.css';
import { siteConfig } from '@config';
import { GetServerSideProps } from 'next';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Provider, createClient } from 'urql';

const Header = dynamic(() => import('@shared').then((mod) => mod.Header));
const Toaster = dynamic(() => import('@shared').then((mod) => mod.Toaster));
const TailwindIndicator = dynamic(() =>
    import('@shared').then((mod) => mod.TailwindIndicator)
);
const ThemeProvider = dynamic(() =>
    import('next-themes').then((mod) => mod.ThemeProvider)
);
const FontProvider = dynamic(() =>
    import('@providers').then((mod) => mod.FontProvider)
);

initAuth();

const url = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT;
export const client = createClient({ url });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>{siteConfig.name}</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            <Provider value={client}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                >
                    <FontProvider>
                        <Header />
                        <Component {...pageProps} />
                        <TailwindIndicator />
                        <Toaster />
                    </FontProvider>
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default withAuthUser()(App);

export const getServerSideProps: GetServerSideProps = withAuthUserTokenSSR()();
