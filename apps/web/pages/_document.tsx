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
                    <meta name='format-detection' content='telephone=yes' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#fff' />
                    <meta name='keywords' content={siteConfig.keywords} />
                    <meta name='description' content={siteConfig.description} />
                    <meta name='application-name' content={siteConfig.name} />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={siteConfig.name} />
                    <meta property='og:site_name' content={siteConfig.name} />
                    <meta property='og:url' content={siteConfig.domain} />
                    <meta property='og:description' content={siteConfig.description} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-title' content={siteConfig.name} />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='twitter:card' content={siteConfig.summary} />
                    <meta name='twitter:description' content={siteConfig.description} />
                    <meta name='twitter:title' content={siteConfig.name} />
                    <meta name='twitter:url' content={siteConfig.domain} />
                    <meta name='twitter:image' content='/img/android-chrome-192x192.png' />
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
