'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('providers',
    [
      {
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: '2020-10-29 21:22:21',
        updatedAt: '2020-10-29 21:22:22',
        cnpjId: 2,
        email: 'cedente002@email.com'
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
