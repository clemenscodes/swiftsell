let prefix: string;

export const getPrefix = (apex = 'swiftsell.de', subdomain = 'shop') => {
    const prodCDN = `https://static.${subdomain}.${apex}/public`;
    const devCDN = `https://dev.static.${subdomain}.${apex}/public`;
    const ENV = 'NEXT_PUBLIC_PROJECT_TYPE';
    const isCloudRunProd = process.env[ENV] === 'production';
    const isCloudRunDev = process.env[ENV] === 'development';
    const isCloudRun = isCloudRunDev || isCloudRunProd;
    const cloudRunAssetPrefix = isCloudRunProd ? prodCDN : devCDN;
    const assetPrefix = isCloudRun ? cloudRunAssetPrefix : '';
    prefix = prefix ? prefix : assetPrefix;
    console.log({ prefix });
    const result = isCloudRun ? assetPrefix : prefix;
    console.log({ result });
    return result;
};

export const PREFIX = getPrefix();
