import { Controller, Get, Post, Body, Req, Query, Session } from '@nestjs/common';
import { UserService } from './user.service'

@Controller('api/user')
export class UserController {

    constructor (
        private readonly userService: UserService
    ) { }

    @Get()
    public async finsUsers (@Query() user) {
        return await this.userService.findUser(user)
    }
}