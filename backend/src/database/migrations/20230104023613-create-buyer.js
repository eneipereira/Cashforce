'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tradingName: Sequelize.STRING,
      cashforceTax: Sequelize.STRING,
      responsibleName: Sequelize.STRING,
      responsibleEmail: Sequelize.STRING,
      responsiblePosition: Sequelize.STRING,
      responsiblePhone: Sequelize.STRING,
      responsibleMobile: Sequelize.STRING,
      website: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      situation: Sequelize.STRING,
      situationDate: Sequelize.STRING,
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
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      confirm: {
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      email: Sequelize.STRING
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('buyers');
  }
};
