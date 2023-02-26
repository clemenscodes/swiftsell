import '../global.css';
import { readBuildtimeEnv, siteConfig } from '@config';
import { Roboto_Condensed as Font } from '@next/font/google';
import { Loader } from '@shared';
import { Session, SupabaseClient } from '@supabase/auth-helpers-react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const SessionContextProvider = dynamic(() =>
    import('@supabase/auth-helpers-react').then(
        (mod) => mod.SessionContextProvider
    )
);
const ThemeProvider = dynamic(() =>
    import('next-themes').then((mod) => mod.ThemeProvider)
);
const Header = dynamic(() => import('@shared').then((mod) => mod.Header));
const TailwindIndicator = dynamic(() =>
    import('@shared').then((mod) => mod.TailwindIndicator)
);

const fontSans = Font({
    weight: '300',
    variable: '--font-sans',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const App: React.FC<AppProps<{ initialSession: Session }>> = ({
    Component,
    pageProps,
}) => {
    const [supabaseClient, setSupabaseClient] = useState<SupabaseClient>();

    useEffect(() => {
        const supabaseUrl = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_URL');
        const supabaseKey = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
        const config = {
            supabaseUrl,
            supabaseKey,
        };
        const sb = async () => {
            const { createBrowserSupabaseClient } = await import(
                '@supabase/auth-helpers-nextjs'
            );
            const sb = createBrowserSupabaseClient(config);
            setSupabaseClient(sb);
            return sb;
        };
        sb();
    }, []);

    return (
        <>
            <Head>
                <title>{siteConfig.name}</title>
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover'
                />
            </Head>
            {supabaseClient ? (
                <>
                    <Script src={`/__ENV.js`}></Script>
                    <SessionContextProvider
                        supabaseClient={supabaseClient}
                        initialSession={pageProps.initialSession}
                    >
                        <ThemeProvider
                            attribute='class'
                            defaultTheme='dark'
                            enableSystem
                        >
                            <main className={`${fontSans.variable} font-sans`}>
                                <Header />
                                <Component
                                    className='container flex-1'
                                    {...pageProps}
                                />
                                <TailwindIndicator />
                            </main>
                        </ThemeProvider>
                    </SessionContextProvider>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default App;
