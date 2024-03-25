'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const csv = require('csv-parser');
        const fs = require('fs');
        const path = require('path');
        const csvFilePath = path.join(
            __dirname,
            '../',
            './src/uploads/states.csv',
        );
        const data = [];
        await new Promise((resolve, reject) => {
            fs.createReadStream(csvFilePath)
                .pipe(csv())
                .on('data', (raw) => {
                    const { id, name, country_id } = raw;
                    data.push({
                        id,
                        stateName: name,
                        countryId: country_id,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
                })
                .on('end', () => {
                    resolve();
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
        return queryInterface.bulkInsert('state', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
