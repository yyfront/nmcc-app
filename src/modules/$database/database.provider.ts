import * as Sequelize from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('Module Database');

function initlize(config) {
    logger.log('初始化mysql数据库...[开始]');

    //Sequelize.useCLS(namespace);
    const dbs = [];
    const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
        host: config.mysql.host,
        port: config.mysql.port || 3306,
        dialect: 'mysql',
        timezone: '+08:00',
        benchmark: true,
        logging: process.env.NODE_ENV === 'production' ? null : (sql) => {
            logger.log(sql);
        },
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        },
        define: {
            /* 字符集 */
            charset: 'utf8',
            collate: 'utf8_general_ci',
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            underscored: true
        },
    });

    const basename = path.basename(module.filename);
    const modelPath = path.resolve(__dirname, '../../model/sequelize');

    fs.readdirSync(modelPath).filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename);
    }).forEach((file) => {
        try {
            const model = sequelize.import(path.join(modelPath, file));
            model['dialect'] = 'mysql';
            dbs[model['name']] = model;
        } catch (e) {
            logger.error(e);
        }
    });

    Object.keys(dbs).forEach((modelName) => {
        const model = dbs[modelName];
        if (model.associate && typeof model.associate === 'function') {
            model.associate(dbs);
        }
    });

    sequelize.sync({ force: false }).then((msg) => {
        logger.log('初始化mysql数据库...[OK]');
    }).catch(error => {
        logger.error(error);
        logger.log('初始化mysql数据库...[FAILED]');
    });

    dbs['sequelize'] = sequelize;
    return dbs;
}

export const databaseProviders = {
    provide: 'Sequelize',
    useFactory: (config) => {
        return initlize(config);
    },
    inject: ['config'],
};
