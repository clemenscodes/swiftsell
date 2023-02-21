const { join } = require('path');
const { withNx } = require('@nrwl/next/plugins/with-nx');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    mode: 'production',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const apexDomain = 'swiftsell.de';
const appName = 'shop';
const protocol = 'https';
const base = `static.${appName}.${apexDomain}`;
const devCDN = `dev.${base}`;
const prodCDN = `${base}`;
const isCloudRunProd = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'production';
const isCloudRunDev = process.env.NEXT_PUBLIC_PROJECT_TYPE === 'development';
const isCloudRun = isCloudRunDev || isCloudRunProd;
const hostname = isCloudRunProd ? prodCDN : devCDN;
const assetPrefix = isCloudRun ? `${protocol}://${hostname}` : undefined;

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    assetPrefix,
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

const conf = withPWA(withNx(nextConfig));
module.exports = conf;
