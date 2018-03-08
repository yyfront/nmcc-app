import { Global, Module } from '@nestjs/common';
import { ConfigProvider } from './providers/config.provider';
import { UtilProvider } from './providers/util.provider';

@Global()
@Module({
    modules: [],
    components: [ConfigProvider, UtilProvider],
    exports: [ConfigProvider, UtilProvider]
})
export class InitModule {
}
