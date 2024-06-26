import { DataTypes } from 'sequelize';

export const hotelModel = (sequelize) => {
    const hotelModel = sequelize.define(
        'hotels',
        {
            hotel_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imgurl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            roomtype: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_ac: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            food: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            wifi: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            paranoid: true,
        },
    );

    return hotelModel;
};
