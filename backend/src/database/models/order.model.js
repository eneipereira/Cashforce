const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  orderNfId: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  orderNumber: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  orderPath: DataTypes.STRING(255),
  orderFileName: DataTypes.STRING(255),
  orderOriginalName: DataTypes.STRING(255),
  emissionDate: DataTypes.STRING(255),
  pdfFile: DataTypes.STRING(255),
  emitedTo: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  nNf: DataTypes.STRING(255),
  CTE: DataTypes.STRING(255),
  value: DataTypes.STRING(255),
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  cnpjId: DataTypes.INTEGER(11),
  userId: DataTypes.INTEGER(11),
  buyerId: DataTypes.INTEGER(11),
  providerId: DataTypes.INTEGER(11),
  orderStatusBuyer: {
    type: DataTypes.STRING(255),
    defaultValue: '0'
  },
  orderStatusProvider: {
    type: DataTypes.STRING(255),
    defaultValue: '0'
  },
  deliveryReceipt: DataTypes.STRING(255),
  cargoPackingList: DataTypes.STRING(255),
  deliveryCtrc: DataTypes.STRING(255),
};

/** @param {import('sequelize').Sequelize} sequelize  */
module.exports = (sequelize) => {
  const Order = sequelize.define('Order', attributes, {
    tableName: 'orders'
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { foreignKey: "buyerId", as: "buyer" })
    Order.belongsTo(models.Cnpj, { foreignKey: "cnpjId", as: "CNPJ" })
    Order.belongsTo(models.Provider, { foreignKey: "providerId", as: "provider" })
    Order.belongsTo(models.User, { foreignKey: "userId", as: "user" })
  }

  return Order;
};
