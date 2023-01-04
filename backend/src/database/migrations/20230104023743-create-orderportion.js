'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableToMarket: {
        type: Sequelize.TINYINT,
        defaultValue: 1
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
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('orderportions');
  }
};
