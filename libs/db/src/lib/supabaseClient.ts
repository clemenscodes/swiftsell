import { readBuildtimeEnv } from '@config';
import { createClient } from '@supabase/supabase-js';

const url = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_URL');
const key = readBuildtimeEnv('NEXT_PUBLIC_SUPABASE_CLIENT_KEY');

export const supabaseClientWrapper = (url?: string, key?: string) => {
    if (!url) {
        throw Error('No url passed to the supabase client');
    }
    if (!key) {
        throw Error('No key passed to the supabase client');
    }
    return createClient(url, key);
};

export const supabaseClient = supabaseClientWrapper(url, key);
