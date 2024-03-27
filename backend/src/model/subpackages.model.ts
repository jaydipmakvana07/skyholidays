import { STRING } from 'sequelize';
import { DataTypes } from 'sequelize';

export const subpackageModel = (sequelize) => {
    const subpackageModel = sequelize.define(
        'sub_packages',
        {
            sub_package_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
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
            package_includes: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true,
            },
            pacakge_details: {
                type: DataTypes.JSONB,
                allowNull: true,
            },
        },
        {
            paranoid: true,
        },
    );

    return subpackageModel;
};
