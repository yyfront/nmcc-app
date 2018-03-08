import * as path from 'path';

const codeConfigFile = path.resolve(process.cwd(), 'config/authCode.js');
const authCode = require(codeConfigFile);

export const AuthCodeProvider = {
    provide: 'authCode',
    useValue: authCode
};