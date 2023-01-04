const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  cnpj: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  companyType: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
  },
};

/** @param {import('sequelize').Sequelize} sequelize  */

module.exports = (sequelize) => {
  const Cnpj = sequelize.define('Cnpj', attributes, {
    tableName: 'cnpjs'
  });

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, { foreignKey: "cnpjId", as: "CNPJ" })
  }
  
  return Cnpj;
};
