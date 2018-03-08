import * as path from 'path';

const codeConfigFile = path.resolve(require.main.filename, '../config/authCode.js');
const authCode = require(codeConfigFile);

export const AuthCodeProvider = {
    provide: 'authCode',
    useValue: authCode
};