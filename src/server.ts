import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as connectRedis from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as expressSession from 'express-session';
import 'reflect-metadata';

import { ApplicationModule } from './modules/$app/app.module';
import { InitModule } from './modules/$init/init.module';

const opn = require('opn');

interface Iconfig {
	port: number;
	redis: any;
	session: any;
}

async function bootstrap() {
	const server = express();
	const RedisStore = connectRedis(expressSession);
	const app = await NestFactory.create(ApplicationModule, server);

    const initModule = app.select(InitModule);
    const config: Iconfig = initModule.get('config');

	await app.use(express.static('public', { maxAge: 7 * 24 * 60 * 60 * 1000 }))
	await app.use(compression());
	await app.use(cookieParser());

	await app.use(expressSession({
        store: new RedisStore(Object.assign(config.redis, {
            ttl: 60 * 10
        })),
        secret: config.session.name,
        resave: true,
        saveUninitialized: false,
        cookie: { secure: false }
	}))
	await app.listen(config.port);
	opn(`http://localhost:${config.port}`)
}
bootstrap();
