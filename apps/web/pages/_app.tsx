import '../global.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { usePrefixStore } from '@redux';
import { usePrefix } from '@hooks';
import { ThemeProvider } from 'next-themes';
import { TailwindIndicator } from '@shared';
import Script from 'next/script';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    usePrefix().getPrefix();
    const { prefix } = usePrefix();
    usePrefixStore.setState({ prefix });
    return (
        <>
            <Head>
                <title>SwiftSell</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            <Script src={`${prefix}/__ENV.js`}></Script>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <Component className='container flex-1' {...pageProps} />
                <TailwindIndicator />
            </ThemeProvider>
        </>
    );
};

export default App;
