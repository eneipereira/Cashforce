const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  nDup: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  dVenc: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  vDup: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  availableToMarket: {
    type: DataTypes.TINYINT(1),
    defaultValue: 1
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  orderId: DataTypes.INTEGER(11)
};

/** @param {import('sequelize').Sequelize} sequelize  */
module.exports = (sequelize) => {
  const OrderPortion = sequelize.define('OrderPortion', attributes, {
    tableName: 'orderportions'
  });

  return OrderPortion;
};
