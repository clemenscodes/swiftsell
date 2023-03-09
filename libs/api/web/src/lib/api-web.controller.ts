import { ApiWebService } from './api-web.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api-web')
export class ApiWebController {
    constructor(private apiWebService: ApiWebService) {}

    @Get()
    getData() {
        return this.apiWebService.getData();
    }
}
