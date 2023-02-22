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
                <meta
                    name='twitter:image'
                    content={`/img/android-chrome-192x192.png`}
                />
                <meta
                    property='og:image'
                    content={`/icons/apple-touch-icon.png`}
                />
                <link
                    href={`/icons/favicon-16x16.png`}
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                />
                <link
                    href={`/icons/favicon-32x32.png`}
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                />
                <link
                    rel='apple-touch-icon'
                    href={`/icons/apple-touch-icon.png`}
                />
                <link rel='icon' href={`/favicon.ico`} />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default CustomApp;
