import { create } from 'zustand';

interface PrefixState {
    prefix: string;
    setPrefix: () => void;
}

export const usePrefixStore = create<PrefixState>((set) => ({
    prefix: '',
    setPrefix: () =>
        set(() => {
            const state: Partial<PrefixState> = { prefix: '' };
            const domain = 'swiftsell.de';
            const hostname = window.location.hostname;
            const devDomain = `dev.${domain}`;
            const prodCDN = `https://static.${domain}/public`;
            const devCDN = `https://dev.static.${domain}/public`;
            const devCloudRunURL = 'web-mcepb6criq-ew.a.run.app';
            const prodCloudRunURL = 'web-ow3benvyza-ew.a.run.app';

            if (hostname === devCloudRunURL || hostname === devDomain) {
                state.prefix = devCDN;
            } else if (hostname === prodCloudRunURL || hostname === domain) {
                state.prefix = prodCDN;
            }
            return state;
        }),
}));
