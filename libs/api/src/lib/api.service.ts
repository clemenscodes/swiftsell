import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    getData(): { message: string } {
        return { message: 'Welcome to server!' };
    }
    getDataTest(): { message: string } {
        return { message: 'Test' };
    }
}
