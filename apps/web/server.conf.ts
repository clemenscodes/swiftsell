import { NextConfig } from 'next';
import { join } from 'path';

interface Config {
    conf: NextConfig;
}
export const config: Config = {
    conf: {
        env: {},
        webpackDevMiddleware: null,
        eslint: { ignoreDuringBuilds: true },
        typescript: { ignoreBuildErrors: false, tsconfigPath: 'tsconfig.json' },
        distDir: './../../dist/apps/web/.next',
        cleanDistDir: true,
        assetPrefix: '',
        configOrigin: 'next.config.js',
        useFileSystemPublicRoutes: true,
        generateEtags: true,
        pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
        target: 'server',
        poweredByHeader: true,
        compress: true,
        analyticsId: '',
        images: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            loaderFile: '',
            domains: [],
            disableStaticImages: false,
            minimumCacheTTL: 60,
            formats: ['image/webp'],
            dangerouslyAllowSVG: false,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '**.swiftsell.de',
                    port: '443',
                    pathname: '**',
                },
            ],
            unoptimized: false,
        },
        devIndicators: {
            buildActivity: true,
            buildActivityPosition: 'bottom-right',
        },
        onDemandEntries: { maxInactiveAge: 15000, pagesBufferLength: 2 },
        amp: { canonicalBase: '' },
        basePath: '',
        sassOptions: {},
        trailingSlash: false,
        i18n: { locales: ['en'], defaultLocale: 'en' },
        productionBrowserSourceMaps: false,
        optimizeFonts: true,
        excludeDefaultMomentLocales: true,
        serverRuntimeConfig: {},
        publicRuntimeConfig: {},
        reactStrictMode: true,
        httpAgentOptions: { keepAlive: true },
        outputFileTracing: true,
        staticPageGenerationTimeout: 60,
        swcMinify: true,
        output: 'standalone',
        experimental: {
            fetchCache: false,
            middlewarePrefetch: 'flexible',
            optimisticClientCache: true,
            manualClientBasePath: false,
            legacyBrowsers: false,
            newNextLinkBehavior: true,
            cpus: 19,
            sharedPool: true,
            profiling: false,
            isrFlushToDisk: true,
            workerThreads: false,
            pageEnv: false,
            optimizeCss: false,
            nextScriptWorkers: false,
            scrollRestoration: false,
            externalDir: false,
            disableOptimizedLoading: false,
            gzipSize: true,
            swcFileReading: true,
            craCompat: false,
            esmExternals: true,
            appDir: false,
            isrMemoryCacheSize: 0,
            fullySpecified: false,
            outputFileTracingRoot: join(__dirname, '../../'),
            swcTraceProfiling: false,
            forceSwcTransforms: false,
            largePageDataBytes: 128000,
            enableUndici: false,
            adjustFontFallbacks: false,
            adjustFontFallbacksWithSizeAdjust: false,
            fontLoaders: [
                {
                    loader: '@next/font/google',
                    options: { subsets: ['latin'] },
                },
                { loader: '@next/font/local' },
            ],
        },
        configFileName: 'next.config.js',
    },
};
