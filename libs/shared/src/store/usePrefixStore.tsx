import { create } from 'zustand';

interface PrefixState {
    prefix: string;
    setPrefix: (domain: string) => void;
}

export const usePrefixStore = create<PrefixState>((set) => ({
    prefix: '',
    setPrefix: (domain: string) => {
        set((state) => {
            if (typeof window !== 'undefined') {
                const hostname = window.location.hostname;
                const devDomain = `dev.${domain}`;
                const prodCDN = `https://static.${domain}/public`;
                const devCDN = `https://dev.static.${domain}/public`;
                const devCloudRunURL = 'web-mcepb6criq-ew.a.run.app';
                const prodCloudRunURL = 'web-ow3benvyza-ew.a.run.app';

                if (hostname === devCloudRunURL || hostname === devDomain) {
                    state.prefix = devCDN;
                } else if (
                    hostname === prodCloudRunURL ||
                    hostname === domain
                ) {
                    state.prefix = prodCDN;
                }
                console.log('running with window', { hostname });
            }
            return state;
        });
    },
}));
