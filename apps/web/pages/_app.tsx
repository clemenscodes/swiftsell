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
                <title>Shop</title>
                <link rel='icon' href={`${PREFIX}/favicon.ico`} />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
