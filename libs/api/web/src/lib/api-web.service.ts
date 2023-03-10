import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiWebService {
    getData(): { message: string } {
        return { message: 'Welcome to API!' };
    }
}
