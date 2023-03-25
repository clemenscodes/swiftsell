import '../global.css';
import { siteConfig } from '@config';
import { DehydratedState } from '@tanstack/react-query';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider));
const FontProvider = dynamic(() => import('@providers').then((mod) => mod.FontProvider));
const QueryProvider = dynamic(() => import('@providers').then((mod) => mod.QueryProvider));
const Layout = dynamic(() => import('@components').then((mod) => mod.Layout));
const Auth = dynamic(() => import('@components').then((mod) => mod.Auth));

const App: React.FC<AppProps<{ session: Session; dehydratedState: DehydratedState }>> = ({
    Component,
    pageProps: { session, dehydratedState, ...pageProps },
}) => {
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
                <QueryProvider dehydratedState={dehydratedState}>
                    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                        <FontProvider>
                            {Component.defaultProps &&
                            'auth' in Component.defaultProps &&
                            Component.defaultProps.auth ? (
                                <Layout>
                                    <Auth>
                                        <Component {...pageProps} />
                                    </Auth>
                                </Layout>
                            ) : (
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            )}
                        </FontProvider>
                    </ThemeProvider>
                </QueryProvider>
            </SessionProvider>
        </>
    );
};

export default App;
