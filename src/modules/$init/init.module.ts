import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../$database/database.module';
import { AuthCodeProvider } from '../$init/providers/authCode.provider';
import { ConfigProvider } from './providers/config.provider';
import { UtilProvider } from './providers/util.provider';

@Global()
@Module({
    modules: [DatabaseModule],
    components: [ConfigProvider, UtilProvider, AuthCodeProvider],
    exports: [ConfigProvider, UtilProvider, DatabaseModule, AuthCodeProvider]
})
export class InitModule {
}
