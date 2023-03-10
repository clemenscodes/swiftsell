import { ApiWebService } from './api-web.service';
import { Test } from '@nestjs/testing';

describe('ApiWebService', () => {
    let service: ApiWebService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [ApiWebService],
        }).compile();

        service = module.get(ApiWebService);
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });

    it('should return "Welcome to API!"', () => {
        expect(service.getData()).toEqual({ message: 'Welcome to API!' });
    });
});
