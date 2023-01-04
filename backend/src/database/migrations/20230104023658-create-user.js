'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      phoneNumber: Sequelize.STRING,
      mobile: Sequelize.STRING,
      departament: Sequelize.STRING,
      verificationCode: Sequelize.STRING,
      emailChecked: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      cashforceAdm: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
