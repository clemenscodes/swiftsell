import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import { usePrefix } from '@shared';

function CustomApp({ Component, pageProps }: AppProps) {
    const PREFIX = usePrefix();
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
