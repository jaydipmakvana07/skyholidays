/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable indent */
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
            './src/uploads/countries.csv',
        );
        const data = [];
        await new Promise((resolve, reject) => {
            fs.createReadStream(csvFilePath)
                .pipe(csv())
                .on('data', (raw) => {
                    const { id, countryName, iso2 } = raw;
                    data.push({
                        id,
                        countryName,
                        iso2,
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
        return queryInterface.bulkInsert('country', data, {});
    },

    async down(queryInterface, Sequelize) {},
};
