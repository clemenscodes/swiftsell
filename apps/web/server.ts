import NextNodeServer from 'next/dist/server/next-server';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { parse } from 'url';
import { config } from './server.conf';

process.chdir(__dirname);
let handler;
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
    process.on('SIGTERM', () => process.exit(0));
    process.on('SIGINT', () => process.exit(0));
}

const PORT = parseInt(process.env.PORT, 10) || 3000;

// const nextServer = new NextNodeServer({
//     hostname: 'localhost',
//     port: PORT,
//     dir: path.join(__dirname),
//     dev: false,
//     customServer: false,
//     conf: {
//         ...config.conf,
//     },
// });

// const handler = nextServer.getRequestHandler();

// nextServer.prepare().then(() => {
//     http.createServer((req, res) => {
//         const parsedUrl = parse(req.url, true);
//         const { pathname } = parsedUrl;
//         const ext = path.extname(pathname);
//         const contentType =
//             ext === '.js' ? 'text/javascript' : 'application/json';
//         if (
//             pathname === '/sw.js' ||
//             pathname === '/manifest.json' ||
//             /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)
//         ) {
//             const filePath = join(__dirname, 'public', pathname);
//             fs.readFile(filePath, (err, data) => {
//                 if (err) {
//                     res.statusCode = 404;
//                     res.end('File not found');
//                 } else {
//                     console.log({ filePath });
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', contentType);
//                     res.end(data);
//                 }
//             });
//         } else {
//             handler(req, res, parsedUrl);
//         }
//     }).listen(PORT, () => {
//         console.log(`> Ready on http://localhost:${PORT}`);
//     });
// });

const server = http.createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const ext = path.extname(pathname);
    const contentType = ext === '.js' ? 'text/javascript' : 'application/json';
    if (
        pathname === '/sw.js' ||
        pathname === '/manifest.json' ||
        /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)
    ) {
        const filePath = path.join(__dirname, 'public', pathname);
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
        try {
            await handler(req, res, parsedUrl);
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    }
});

server.listen(PORT, () => {
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
    handler = nextServer.getRequestHandler();

    console.log('Listening on port', PORT, 'url: http://localhost:' + PORT);
});
