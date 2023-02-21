import request from 'supertest';
import { Test } from '@nestjs/testing';
import { ApiModule, ApiService } from '@api';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
    let app: INestApplication;
    const apiService = { getData: () => ['Welcome to server!'] };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ApiModule],
        })
            .overrideProvider(ApiService)
            .useValue(apiService)
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET /`, () => {
        return request(app.getHttpServer())
            .get('')
            .expect(200)
            .expect(apiService.getData());
    });

    afterAll(async () => {
        await app.close();
    });
});
