'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('appearance_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        // Change for Table 2
        await queryInterface.changeColumn('child_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        // Change for Table 3
        await queryInterface.changeColumn('parent_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        await queryInterface.changeColumn('professional_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        await queryInterface.addColumn('star_details', 'star_status', {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('appearance_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        // Change for Table 2
        await queryInterface.changeColumn('child_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        // Change for Table 3
        await queryInterface.changeColumn('parent_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        await queryInterface.changeColumn('professional_details', 'image', {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: '8a8fb9bf-6039-4cf3-a4e0-02e24607b059.png',
        });

        await queryInterface.removeColumn('star_details', 'star_status', {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        });
    },
};
