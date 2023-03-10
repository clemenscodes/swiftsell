import { ApiWebController } from './api-web.controller';
import { ApiWebService } from './api-web.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ApiWebController],
    providers: [ApiWebService],
    exports: [ApiWebService],
})
export class ApiWebModule {}
