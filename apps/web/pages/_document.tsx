import { siteConfig } from '@config';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta property='og:description' content='Best PWA App in the world' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='description' content='Best PWA App in the world' />
                    <meta name='twitter:description' content='Best PWA App in the world' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='PWA App' />
                    <meta property='og:site_name' content='PWA App' />
                    <meta name='description' content='A beautiful shop' />
                    <meta name='keywords' content='shopping' />
                    <meta name='theme-color' content='#317EFB' />
                    <meta name='application-name' content='PWA App' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-title' content='PWA App' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#000000' />
                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:title' content='PWA App' />
                    <meta name='twitter:url' content={siteConfig.domain} />
                    <meta property='og:url' content={siteConfig.domain} />
                    <meta name='twitter:image' content='/img/android-chrome-192x192.png' />
                    <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel='manifest' href='/manifest.json' />
                    <link href='/icons/apple-touch-icon.png' rel='apple-touch-icon' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <body className='dark:text-dimmed-font dark:bg-dimmed-900 min-h-screen font-sans antialiased'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
