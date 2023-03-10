import { ApiWebModule } from '@api/web';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
    process.on('SIGTERM', () => process.exit(0));
    process.on('SIGINT', () => process.exit(0));
}

async function bootstrap() {
    const app = await NestFactory.create(ApiWebModule);
    const port = process.env.PORT || 5000;
    await app.listen(port);
    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
