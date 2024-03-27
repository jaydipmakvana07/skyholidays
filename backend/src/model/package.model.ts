import { DataTypes } from 'sequelize';

export const packageModel = (sequelize) => {
    const packageModel = sequelize.define(
        'packages',
        {
            package_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            subtitle: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            cost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            duration: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            packagetype: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_latest: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            is_weekend: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            food: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            flight: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            imgurl: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            paranoid: true,
        },
    );

    return packageModel;
};
