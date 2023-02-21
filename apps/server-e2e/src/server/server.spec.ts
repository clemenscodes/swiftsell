import request from 'supertest';
import { Test } from '@nestjs/testing';
import { ApiModule, ApiService } from '@api';
import { INestApplication } from '@nestjs/common';

describe('Api', () => {
    let app: INestApplication;
    const apiService = {
        getData: () => ['Welcome to server!'],
        getDataTest: () => ['Test'],
    };

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
            .get('/')
            .expect(200)
            .expect(apiService.getData());
    });

    it(`/GET /`, () => {
        return request(app.getHttpServer())
            .get('/test')
            .expect(200)
            .expect(apiService.getDataTest());
    });

    afterAll(async () => {
        await app.close();
    });
});
