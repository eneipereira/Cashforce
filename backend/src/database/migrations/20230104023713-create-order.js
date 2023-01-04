'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        unique: true,
        type: Sequelize.STRING
      },
      orderFileName: {
        unique: true,
        type: Sequelize.STRING
      },
      orderOriginalName: {
        unique: true,
        type: Sequelize.STRING
      },
      emissionDate: Sequelize.STRING,
      pdfFile: Sequelize.STRING,
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: Sequelize.STRING,
      CTE: Sequelize.STRING,
      value: Sequelize.STRING,
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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "buyers",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "providers",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: Sequelize.STRING,
      cargoPackingList: Sequelize.STRING,
      deliveryCtrc: Sequelize.STRING,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
