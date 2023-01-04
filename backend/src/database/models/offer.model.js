const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  tax: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  tariff: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  adValorem: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  float: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  iof: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  expiresIn: {
    allowNull: false,
    type: DataTypes.DATE
  },
  paymentStatusSponsor: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  },
  paymentStatusProvider: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  orderId: DataTypes.INTEGER(11),
  sponsorId: DataTypes.INTEGER(11)
};

/** @param {import('sequelize').Sequelize} sequelize  */
module.exports = (sequelize) => {
  const Offer = sequelize.define('Offer', attributes, {
    tableName: 'offers'
  });

  return Offer;
};
