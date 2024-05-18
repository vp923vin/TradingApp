const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const OTPManage = sequelize.define('OTPManage', {
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
  email_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mobile_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  login_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bank_otp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  payment_otp: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'otp_manage',
  timestamps: false 
});

module.exports = OTPManage;
