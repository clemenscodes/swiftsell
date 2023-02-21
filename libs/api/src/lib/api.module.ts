import { Module, Global } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Global()
@Module({
    controllers: [ApiController],
    providers: [ApiService],
    exports: [ApiService],
})
export class ApiModule {}
