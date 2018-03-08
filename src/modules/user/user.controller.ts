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

    @Post()
    public async createUser (@Body() user) {
        if (user.username) {
            return this.userService.createUser(user)
        }
        return {
            error: 'invalid username'
        }
    }

    @Post('login')
    public async login (@Body() body, @Session() session) {
        if (body.username) {
            const user = await this.userService.findUser(body)
            session.user = user
            return user
        }
        return { error: 'invalid username' }
    }

    @Get('logout')
    public async logout (@Session() session) {
        if (session.user) {
            delete session.user;
        }
        return { status: 'success' };
    }

    @Get('check')
    private async checkLogin(@Req() req, @Session() session) {
        if (session && session.user) {
            return { status: 'success', user: session.user };
        }

        return { status: 'failed' };
    }
}