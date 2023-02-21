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
                <meta
                    name='twitter:image'
                    content={`${PREFIX}/img/android-chrome-192x192.png`}
                />
                <meta
                    property='og:image'
                    content={`${PREFIX}/icons/apple-touch-icon.png`}
                />
                <link
                    href={`${PREFIX}/img/favicon-16x16.png`}
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                />
                <link
                    href={`${PREFIX}/img/favicon-32x32.png`}
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                />
                <link
                    rel='apple-touch-icon'
                    href={`${PREFIX}/icons/apple-touch-icon.png`}
                />
                <link
                    rel='manifest'
                    crossOrigin='use-credentials'
                    href={`${PREFIX}/site.webmanifest`}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default CustomApp;
