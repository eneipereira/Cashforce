'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      tradingName: Sequelize.STRING(255),
      cashforceTax: Sequelize.STRING(255),
      responsibleName: Sequelize.STRING(255),
      responsibleEmail: Sequelize.STRING(255),
      responsiblePosition: Sequelize.STRING(255),
      responsiblePhone: Sequelize.STRING(255),
      responsibleMobile: Sequelize.STRING(255),
      website: Sequelize.STRING(255),
      postalCode: Sequelize.STRING(255),
      address: Sequelize.STRING(255),
      number: Sequelize.STRING(255),
      complement: Sequelize.STRING(255),
      neighborhood: Sequelize.STRING(255),
      city: Sequelize.STRING(255),
      state: Sequelize.STRING(255),
      bank: Sequelize.STRING(255),
      bankAgency: Sequelize.STRING(255),
      account: Sequelize.STRING(255),
      phoneNumber: Sequelize.STRING(255),
      situation: Sequelize.STRING(255),
      situationDate: Sequelize.STRING(255),
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: "cnpjs",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      email: {
        type: Sequelize.STRING(255)
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sponsors');
  }
};
