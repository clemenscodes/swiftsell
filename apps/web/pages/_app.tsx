import { initAuth } from '@utils';
import '../global.css';
import { ApolloProvider } from '@apollo/client';
import { apolloClient, siteConfig } from '@config';
import { GetServerSideProps } from 'next';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

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
            <ApolloProvider client={apolloClient}>
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
            </ApolloProvider>
        </>
    );
};

export default withAuthUser()(App);

export const getServerSideProps: GetServerSideProps = withAuthUserTokenSSR()();
