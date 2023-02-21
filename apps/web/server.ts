import NextNodeServer from 'next/dist/server/next-server';
import http from 'http';
import path from 'path';
import { config } from './server.conf';

let handler;

process.chdir(__dirname);

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
            ...config.conf,
        },
    });
    handler = nextServer.getRequestHandler();

    console.log(
        'Listening on port',
        currentPort,
        'url: http://localhost:' + currentPort
    );
});
