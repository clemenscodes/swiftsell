import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import { usePrefixStore, usePrefix } from '@shared';

function CustomApp({ Component, pageProps }: AppProps) {
    usePrefixStore.setState({ prefix: usePrefix() });
    return (
        <>
            <Head>
                <title>SwiftSell</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default CustomApp;
