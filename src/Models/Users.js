const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  mobile: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  access_token: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  is_admin: {
    type: DataTypes.ENUM('0', '1'),
    defaultValue: '0'
  },
  email_verified: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  mobile_verified: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
  },
  is_activated: {
    type: DataTypes.ENUM('0', '1'),
    defaultValue: '0'
  },
  balance: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  wallet_pin: {
    type: DataTypes.STRING(4),
    allowNull: true
  }
}, {
  tableName: 'users' 
});

module.exports = User;