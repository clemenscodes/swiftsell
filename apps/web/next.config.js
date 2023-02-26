const { join } = require('path');
const { withNx } = require('@nrwl/next/plugins/with-nx');

const isCloudRunProd = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'production';
const isCloudRunDev = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'development';
const isCloudRun = isCloudRunDev || isCloudRunProd;
const protocol = 'https';
const apexDomain = 'swiftsell.de';
const appName = 'shop';
const base = `${appName}.${apexDomain}`;
// const prodDomain = `${protocol}://${base}`;
// const devDomain = `${protocol}://dev.${base}`;
// const staticBase = `static.${base}`;
// const devCDN = `dev.${staticBase}`;
// const prodCDN = `${staticBase}`;
// const hostname = isCloudRunProd ? prodCDN : devCDN;
// const assetPrefix = isCloudRun ? `${protocol}://${hostname}` : undefined;
// const PORT = process.env.PORT || 3000;
// const localDomain = `http://localhost:${PORT}`;
// const domain = isCloudRun
//     ? isCloudRunProd
//         ? prodDomain
//         : devDomain
//     : localDomain;
const hostname = isCloudRun
    ? isCloudRunProd
        ? base
        : `dev.${base}`
    : 'localhost';

const withPWA = require('next-pwa')({
    dest: 'public',
    skipWaiting: true,
    register: true,
    // exclude: [
    //     ({ asset }) =>
    //         asset.name.startsWith('public/') ||
    //         asset.name.startsWith('server/') ||
    //         asset.name.startsWith('static/') ||
    //         asset.name.match(
    //             /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
    //         ),
    // ],
    // modifyURLPrefix: {
    //     [assetPrefix]: domain,
    // },
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    // assetPrefix,
    output: 'standalone',
    swcMinify: true,
    experimental: {
        outputFileTracingRoot: join(__dirname, '../../'),
        isrMemoryCacheSize: 0,
    },
    images: {
        remotePatterns: [
            {
                protocol,
                hostname,
                port: '443',
                pathname: '/public/**',
            },
        ],
        unoptimized: false,
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

module.exports = withPWA(withNx(nextConfig));
