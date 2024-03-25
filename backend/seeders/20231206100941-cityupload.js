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
            './src/uploads/cities.csv',
        );
        const data = [];
        await new Promise((resolve, reject) => {
            fs.createReadStream(csvFilePath)
                .pipe(csv())
                .on('data', (raw) => {
                    const { id, name, state_id, country_id } = raw;
                    data.push({
                        id,
                        cityName: name,
                        stateId: state_id,
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
        return queryInterface.bulkInsert('city', data, {});
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
