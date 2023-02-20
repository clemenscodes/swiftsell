import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import { usePrefixStore } from '@shared';

function CustomApp({ Component, pageProps }: AppProps) {
    usePrefixStore((state) => state.setPrefix('shop.swfitsell.de'));
    console.log('ran setprefix');
    const PREFIX = usePrefixStore((state) => state.prefix);
    console.log({ PREFIX });
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
