import { readBuildtimeEnv } from '@config';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useState, useEffect } from 'react';

export interface UseSupabaseClient {
    supabaseClient: SupabaseClient | undefined;
}

export function useSupabaseClient(): UseSupabaseClient {
    const [supabaseClient, setSupabaseClient] = useState<SupabaseClient>();

    useEffect(() => {
        const supabaseUrl = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_URL');
        const supabaseKey = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
        const config = {
            supabaseUrl,
            supabaseKey,
        };
        (async () => {
            const { createBrowserSupabaseClient } = await import(
                '@supabase/auth-helpers-nextjs'
            );
            const client = createBrowserSupabaseClient(config);
            setSupabaseClient(client);
        })();
    }, []);

    return { supabaseClient };
}

export default useSupabaseClient;
