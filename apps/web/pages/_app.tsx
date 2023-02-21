import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import { usePrefixStore, usePrefix } from '@shared';

function CustomApp({ Component, pageProps }: AppProps) {
    usePrefixStore.setState({ prefix: usePrefix() });
    const PREFIX = usePrefixStore((state) => state.prefix);
    return (
        <>
            <Head>
                <title>SwiftSell</title>
                <link rel='icon' href={`${PREFIX}/favicon.ico`} />
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
