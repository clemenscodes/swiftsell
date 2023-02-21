import NextNodeServer from 'next/dist/server/next-server';
import http from 'http';
import path from 'path';
let handler;

process.chdir(__dirname);

// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
    process.on('SIGTERM', () => process.exit(0));
    process.on('SIGINT', () => process.exit(0));
}

const server = http.createServer(async (req, res) => {
    try {
        await handler(req, res);
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('internal server error');
    }
});
const currentPort = parseInt(process.env.PORT, 10) || 3000;

server.listen(currentPort, () => {
    const nextServer = new NextNodeServer({
        hostname: 'localhost',
        port: currentPort,
        dir: path.join(__dirname),
        dev: false,
        customServer: false,
        conf: {
            env: {},
            webpackDevMiddleware: null,
            eslint: { ignoreDuringBuilds: true },
            typescript: {
                ignoreBuildErrors: false,
                tsconfigPath: 'tsconfig.json',
            },
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
                contentSecurityPolicy:
                    "script-src 'none'; frame-src 'none'; sandbox;",
                remotePatterns: [],
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
            i18n: null,
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
            trustHostHeader: false,
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
                outputFileTracingRoot:
                    '/home/clay/.local/src/dev/web/swiftsell/',
                swcTraceProfiling: false,
                forceSwcTransforms: false,
                largePageDataBytes: 128000,
                enableUndici: false,
                adjustFontFallbacks: false,
                adjustFontFallbacksWithSizeAdjust: false,
            },
            configFileName: 'next.config.js',
        },
    });
    handler = nextServer.getRequestHandler();

    console.log(
        'Listening on port',
        currentPort,
        'url: http://localhost:' + currentPort
    );
});
