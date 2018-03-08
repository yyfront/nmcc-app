import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    modules: [],
    controllers: [UserController],
    components: [UserService],
    exports: [UserService],
})
export class UserModule {

}
