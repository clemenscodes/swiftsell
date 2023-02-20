import { AppProps } from 'next/app';
import Head from 'next/head';
import { getPrefix } from '@utils';
import '../global.css';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Shop</title>
                <link rel='icon' href={`${getPrefix()}/favicon.ico`} />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
