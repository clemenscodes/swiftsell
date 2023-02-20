import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import { usePrefixStore, PrefixState } from '@shared';

function CustomApp({ Component, pageProps }: AppProps) {
    usePrefixStore.setState(
        ((domain = 'shop.swiftsell.de') => {
            const state: Partial<PrefixState> = {
                prefix: '',
            };
            if (typeof window !== 'undefined') {
                const hostname = window.location.hostname;
                const devDomain = `dev.${domain}`;
                const prodCDN = `https://static.${domain}/public`;
                const devCDN = `https://dev.static.${domain}/public`;
                const devCloudRunURL = 'web-mcepb6criq-ew.a.run.app';
                const prodCloudRunURL = 'web-ow3benvyza-ew.a.run.app';

                if (hostname === devCloudRunURL || hostname === devDomain) {
                    state.prefix = devCDN;
                } else if (
                    hostname === prodCloudRunURL ||
                    hostname === domain
                ) {
                    state.prefix = prodCDN;
                }
                console.log('running with window', { hostname });
            }
            return state;
        })()
    );
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
