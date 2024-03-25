import { DataTypes } from 'sequelize';
import { compareSync, hashSync, genSaltSync } from 'bcrypt';

export const userModel = (sequelize) => {
    const userModel = sequelize.define(
        'user_details',
        {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            spend_time: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue:0
            },
            coins: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:0
            },
            role: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ['0', '1', '2', '3', '4'],
            },
            last_login: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            paranoid: true,
            indexes: [
                {
                    fields: ['email'],
                },
                {
                    fields: ['role'],
                },
            ],
        },
    );

    userModel.afterValidate((data) => {
        if (data.changed('password')) {
            data.password = hashSync(data.password, genSaltSync(12));
        }
    });
    userModel.prototype.authenticate = function (val: string) {
        if (compareSync(val, this.password)) {
            return this;
        } else {
            return false;
        }
    };

    return userModel;
};
