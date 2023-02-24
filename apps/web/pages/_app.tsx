import '../global.css';
import Head from 'next/head';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { usePrefixStore } from '@redux';
import { usePrefix } from '@hooks';
import { ThemeProvider } from 'next-themes';
import { Header, TailwindIndicator } from '@shared';
import { siteConfig } from '@config';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    usePrefixStore.setState({ prefix: usePrefix().prefix });
    return (
        <>
            <Head>
                <title>{siteConfig.name}</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            <Script src={`/__ENV.js`}></Script>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                <Header />
                <Component className='container flex-1' {...pageProps} />
                <TailwindIndicator />
            </ThemeProvider>
        </>
    );
};

export default App;
