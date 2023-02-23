import '../global.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { usePrefixStore } from '@redux';
import { usePrefix } from '@hooks';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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
};

export default App;
