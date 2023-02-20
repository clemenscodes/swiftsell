import { useEffect, useState } from 'react';

export const usePrefix = (domain = 'shop.swiftsell.de') => {
    const [prefix, setPrefix] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let prefix = '';
            const hostname = window.location.hostname;
            const devDomain = `dev.${domain}`;
            const prodCDN = `https://static.${domain}/public`;
            const devCDN = `https://dev.static.${domain}/public`;
            const devCloudRunURL = 'web-mcepb6criq-ew.a.run.app';
            const prodCloudRunURL = 'web-ow3benvyza-ew.a.run.app';

            if (hostname === devCloudRunURL || hostname === devDomain) {
                prefix = devCDN;
            } else if (hostname === prodCloudRunURL || hostname === domain) {
                prefix = prodCDN;
            }
            setPrefix(prefix);
        }
    }, [domain]);
    console.log(prefix);
    return prefix;
};

export default usePrefix;
