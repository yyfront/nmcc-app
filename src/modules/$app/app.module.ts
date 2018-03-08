import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { InitModule } from '../$init/init.module';
import { UserModule } from '../user/user.module'

@Module({
    modules: [InitModule, UserModule]
})
export class ApplicationModule implements NestModule {
    public configure (consumer: MiddlewaresConsumer): void {

    }
}