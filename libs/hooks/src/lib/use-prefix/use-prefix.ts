import { useState, useCallback } from 'react';

export interface UsePrefix {
    prefix: string;
    getPrefix: () => void;
}

export const usePrefix: (domain?: string) => UsePrefix = (
    domain = 'shop.swiftsell.de'
) => {
    const [prefix, setPrefix] = useState('');

    const getPrefix = useCallback(() => {
        if (typeof window !== 'undefined') {
            console.log('running');
            const hostname = window.location.hostname;
            const devDomain = `dev.${domain}`;
            const prodCDN = `https://static.${domain}/public`;
            const devCDN = `https://dev.static.${domain}/public`;
            const devCloudRunURL = 'web-mcepb6criq-ew.a.run.app';
            const prodCloudRunURL = 'web-ow3benvyza-ew.a.run.app';
            if (hostname === devCloudRunURL || hostname === devDomain) {
                setPrefix(devCDN);
            } else if (hostname === prodCloudRunURL || hostname === domain) {
                setPrefix(prodCDN);
            }
        }
    }, [domain]);

    return { prefix, getPrefix };
};

export default usePrefix;
