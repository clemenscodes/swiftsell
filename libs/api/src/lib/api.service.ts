import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    getData(): { message: string } {
        return { message: 'Welcome to server!' };
    }
}
