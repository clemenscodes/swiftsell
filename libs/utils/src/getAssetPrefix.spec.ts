import { getAssetPrefix } from './getAssetPrefix';

describe('getAssetPrefix', () => {
    it('should work', () => {
        const ENV = 'NEXT_PUBLIC_PROJECT_TYPE';
        const devCDN = 'https://dev.static.shop.swiftsell.de/public';
        const prodCDN = 'https://static.shop.swiftsell.de/public';
        expect(getAssetPrefix()).toEqual('');
        process.env[ENV] = 'development';
        expect(getAssetPrefix()).toEqual(devCDN);
        process.env[ENV] = 'production';
        expect(getAssetPrefix()).toEqual(prodCDN);
    });
});
