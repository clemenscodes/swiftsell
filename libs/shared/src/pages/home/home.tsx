import { cn } from '@styles';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

/* eslint-disable-next-line */
export interface HomeProps {}

const Auth = dynamic(() =>
    import('@supabase/auth-ui-react').then((mod) => mod.Auth)
);

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    const session = useSession();
    const supabase = useSupabaseClient();
    return (
        <main
            data-testid='home'
            className={cn('flex max-w-full items-center justify-center')}
        >
            {!session ? (
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme='light'
                />
            ) : (
                <p>Account page will go here.</p>
            )}
        </main>
    );
};

export default Home;
