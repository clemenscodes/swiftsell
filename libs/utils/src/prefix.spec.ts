import { getPrefix } from './prefix';

describe('PREFIX', () => {
    const ENV = 'NEXT_PUBLIC_PROJECT_TYPE';
    it('should be empty string without env', () => {
        expect(getPrefix()).toEqual('');
    });
    it('should be devCDN string with env set to development', () => {
        const devCDN = 'https://dev.static.shop.swiftsell.de/public';
        process.env[ENV] = 'development';
        expect(getPrefix()).toEqual(devCDN);
    });
    it('should be prodCDN string with env set to production', () => {
        const prodCDN = 'https://static.shop.swiftsell.de/public';
        process.env[ENV] = 'production';
        expect(getPrefix()).toEqual(prodCDN);
    });
});
