// const {
//     PHASE_DEVELOPMENT_SERVER,
//     PHASE_DEVELOPMENT_BUILD,
//     PHASE_PRODUCTION_SERVER,
//     PHASE_PRODUCTION_BUILD,
// } = require('next/constants');
const { join } = require('path');
const { withNx } = require('@nrwl/next/plugins/with-nx');

const apexDomain = 'swiftsell.de';
const appName = 'shop';
const prodCDN = `https://static.${appName}.${apexDomain}`;
const devCDN = `https://dev.static.${appName}.${apexDomain}`;
const isCloudRunProd = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'production';
const isCloudRunDev = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'development';
const isCloudRun = isCloudRunDev || isCloudRunProd;
const cloudRunAssetPrefix = isCloudRunProd ? prodCDN : devCDN;
const assetPrefix = isCloudRun ? cloudRunAssetPrefix : undefined;

module.exports = (phase) => {
    // const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
    // const isDevBuild = phase === PHASE_DEVELOPMENT_BUILD;
    // const isProdServer = phase === PHASE_PRODUCTION_SERVER;
    // const isProdBuild = phase === PHASE_PRODUCTION_BUILD;

    // if (isDevBuild) console.log({ isDevBuild });
    // if (isDevServer) console.log({ isDevServer });
    // if (isProdBuild) console.log({ isProdBuild });
    // if (isProdServer) console.log({ isProdServer });

    // const env = {
    //     NEXT_PUBLIC_PROJECT_TYPE: (() => {
    //         if (isProdServer && isCloudRun) {
    //             console.log(process.env.NEXT_PUBLIC_PROJECT_TYPE);
    //             return process.env.NEXT_PUBLIC_PROJECT_TYPE;
    //         }
    //         return;
    //     })(),
    // };

    /**
     * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
     **/
    const nextConfig = {
        // env,
        assetPrefix,
        output: 'standalone',
        swcMinify: true,
        experimental: {
            outputFileTracingRoot: join(__dirname, '../../'),
            isrMemoryCacheSize: 0,
        },
        images: {
            unoptimized: true,
        },
        reactStrictMode: true,
        nx: {
            // Set this to true if you would like to to use SVGR
            // See: https://github.com/gregberge/svgr
            svgr: true,
        },
        webpack(config) {
            config.module.rules.push({
                test: /index\.(js|mjs|jsx|ts|tsx)$/,
                sideEffects: false,
            });
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            });
            return config;
        },
    };
    return withNx(nextConfig);
};
