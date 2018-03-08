import { Component } from '@nestjs/common'

@Component()
export class UserService {
    public async findUser (user: any) {
        return { username: 'bill' }
    }
}