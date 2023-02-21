import NextNodeServer from 'next/dist/server/next-server';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { config } from './server.conf';
import { parse } from 'url';
import { join } from 'path';

process.chdir(__dirname);

if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
    process.on('SIGTERM', () => process.exit(0));
    process.on('SIGINT', () => process.exit(0));
}

const PORT = parseInt(process.env.PORT, 10) || 3000;

const nextServer = new NextNodeServer({
    hostname: 'localhost',
    port: PORT,
    dir: path.join(__dirname),
    dev: false,
    customServer: false,
    conf: {
        ...config.conf,
    },
});

const handler = nextServer.getRequestHandler();

nextServer.prepare().then(() => {
    http.createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname } = parsedUrl;
        const ext = path.extname(pathname);
        const contentType =
            ext === '.js' ? 'text/javascript' : 'application/json';
        if (
            pathname === '/sw.js' ||
            pathname === '/manifest.json' ||
            /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)
        ) {
            const filePath = join(__dirname, 'public', pathname);
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('File not found');
                } else {
                    console.log({ filePath });
                    res.statusCode = 200;
                    res.setHeader('Content-Type', contentType);
                    res.end(data);
                }
            });
        } else {
            handler(req, res, parsedUrl);
        }
    }).listen(PORT, () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
