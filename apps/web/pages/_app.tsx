import '../global.css';
import { siteConfig } from '@config';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider));
const FontProvider = dynamic(() => import('@providers').then((mod) => mod.FontProvider));
const GraphqlProvider = dynamic(() => import('@providers').then((mod) => mod.GraphqlProvider));
const Header = dynamic(() => import('@components').then((mod) => mod.Header));
const Auth = dynamic(() => import('@components').then((mod) => mod.Auth));
const Toaster = dynamic(() => import('@components').then((mod) => mod.Toaster));
const TailwindIndicator = dynamic(() => import('@components').then((mod) => mod.TailwindIndicator));

const App: React.FC<AppProps<{ session: Session }>> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <>
            <Head>
                <title>{siteConfig.name}</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            <SessionProvider session={session}>
                <GraphqlProvider>
                    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                        <FontProvider>
                            <Header />
                            {Component.defaultProps &&
                            'auth' in Component.defaultProps &&
                            Component.defaultProps.auth ? (
                                <Auth>
                                    <Component {...pageProps} />
                                </Auth>
                            ) : (
                                <Component {...pageProps} />
                            )}
                            <TailwindIndicator />
                            <Toaster />
                        </FontProvider>
                    </ThemeProvider>
                </GraphqlProvider>
            </SessionProvider>
        </>
    );
};

export default App;
