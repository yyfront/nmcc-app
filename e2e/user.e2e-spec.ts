import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ApplicationModule } from '../src/modules/$app/app.module';

describe('User', () => {
    const server = express();

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ApplicationModule],
        })
            .compile();

        const app = module.createNestApplication(server);
        await app.init();
    });

    it(`/GET api/user`, () => {
        return request(server)
            .get('/api/user')
            .expect(200);
    });

    afterAll(async () => {
        await app.close();
    });
});