import * as fs from 'fs';
import * as path from 'path';

let config = null;

function parseConfigFile(mode: string | null = 'dev'){

    try {
        const configFilePath = path.resolve(require.main.filename, '../config', `${mode}.config.js`);
        const configFileExist = fs.existsSync(configFilePath);

        if (configFileExist){
            const configFileContent = require(configFilePath);
            if (!configFileContent || !configFileContent.port || isNaN(parseInt(configFileContent.port, 10))){
                throw new Error('config port error');
            }
            return configFileContent;
        } else {
            throw new Error('config file not found');
        }
    } catch (e) {
        throw e;
    }
}

if (process.env.NODE_ENV === 'production') {
    config = parseConfigFile('prod');
} else {
    config = parseConfigFile();
}

export const ConfigProvider = {
    provide: 'config',
    useValue: config
};