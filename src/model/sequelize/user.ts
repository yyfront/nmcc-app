export default function(sequelize, DataTypes) {
    const Model = sequelize.define((__filename.substr(__dirname.length + 1)).split(".")[0], {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            comment: '登陆用户名'
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        paranoid: true,
        underscored: true
    });

    return Model;
};