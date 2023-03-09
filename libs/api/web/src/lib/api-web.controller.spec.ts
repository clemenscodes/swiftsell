import { ApiWebController } from './api-web.controller';
import { ApiWebService } from './api-web.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ApiWebController', () => {
    let controller: ApiWebController;
    let app: TestingModule;

    beforeEach(async () => {
        app = await Test.createTestingModule({
            providers: [ApiWebService],
            controllers: [ApiWebController],
        }).compile();

        controller = app.get(ApiWebController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });

    it('should return "Welcome to API!"', () => {
        const appController = app.get<ApiWebController>(ApiWebController);
        expect(appController.getData()).toEqual({
            message: 'Welcome to API!',
        });
    });
});
