'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      paymentStatusProvider: {
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
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "sponsors",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  }
};
