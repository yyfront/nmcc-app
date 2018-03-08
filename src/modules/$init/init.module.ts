import { Global, Module } from '@nestjs/common';
import { AuthCodeProvider } from '../$init/providers/authCode.provider';
import { ConfigProvider } from './providers/config.provider';
import { UtilProvider } from './providers/util.provider';

@Global()
@Module({
    modules: [],
    components: [ConfigProvider, UtilProvider, AuthCodeProvider],
    exports: [ConfigProvider, UtilProvider, AuthCodeProvider]
})
export class InitModule {
}
