'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            'user_auth_details',
            [
                {
                    id: 'd9189937-a328-4cd2-8035-d225e64a8c39',
                    username: 'admin5989',
                    email: 'superadmin12@gmail.com',
                    password:
                        '$2b$12$Cfr0xhIud616MPM844hQFOSnN6zNy0eQwzu37MrRvN.uyQGunpbtC',
                    role: '1',
                    is_updated: true,
                    last_login: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    deletedAt: null,
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete(
            'user_auth_details',
            { username: 'admin5989' },
            {},
        );
    },
};
