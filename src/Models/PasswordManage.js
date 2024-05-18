const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const PasswordManage = sequelize.define('PasswordManage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  password_change_token: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  tableName: 'password_manage',
  timestamps: false 
});

module.exports = PasswordManage;
