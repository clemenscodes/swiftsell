import '../global.css';
import { siteConfig } from '@config';
import { usePrefix } from '@hooks';
import { Roboto_Condensed as Font } from '@next/font/google';
import { usePrefixStore } from '@redux';
import { Header, TailwindIndicator } from '@shared';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

const fontSans = Font({
    weight: '300',
    variable: '--font-sans',
    display: 'swap',
});

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
                <main className={`${fontSans.variable} font-sans`}>
                    <Header />
                    <Component className='container flex-1' {...pageProps} />
                    <TailwindIndicator />
                </main>
            </ThemeProvider>
        </>
    );
};

export default App;
