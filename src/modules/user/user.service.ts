import { Component, Inject } from '@nestjs/common'

@Component()
export class UserService {
    private readonly userTable;
    private readonly authCode;

    constructor (
        @Inject('Sequelize') db, @Inject('authCode') authCode
    ) {
        this.userTable = db.user;
        this.authCode = authCode;
    }

    public async findUser (user: any) {
        return await this.userTable.findOne({ where: user })
    }

    public async createUser (user: any) {
        return this.userTable.create(user)
    }
}