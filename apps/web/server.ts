import NextNodeServer from 'next/dist/server/next-server';
import http from 'http';
import path from 'path';
import { config } from './server.conf';

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

const server = http.createServer(async (req, res) => {
    try {
        await handler(req, res);
    } catch (e) {
        res.statusCode = 500;
        console.log(`Error handling request: ${req}`);
        console.error({ e });
        res.end('Internal server error');
    }
});

nextServer.prepare().then(() =>
    server.listen(PORT, () => {
        console.log(`> Ready on http://localhost:${PORT}`);
    })
);
