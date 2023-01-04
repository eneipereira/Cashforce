const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER(11),
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },
  phoneNumber: DataTypes.STRING(255),
  mobile: DataTypes.STRING(255),
  departament: DataTypes.STRING(255),
  verificationCode: DataTypes.STRING(255),
  emailChecked: {
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
  cashforceAdm: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  }
};

/** @param {import('sequelize').Sequelize} sequelize  */
module.exports = (sequelize) => {
  const User = sequelize.define('User', attributes, {
    tableName: 'users'
  });

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: "userId", as: "user" })
  }

  return User;
};
