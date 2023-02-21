import { ApiService } from './api.service';
import { Controller, Get } from '@nestjs/common';
@Controller('')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}
    @Get()
    getData() {
        return this.apiService.getData();
    }
}
