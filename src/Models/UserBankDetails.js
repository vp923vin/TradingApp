const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 
const User = require('../Models/Users');

const UserBankDetail = sequelize.define('UserBankDetail', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uid: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      },
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    account_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ifsc_code: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    branch_address: {
      type: DataTypes.STRING(255),
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
    tableName: 'user_bank_details',
    timestamps: false 
  });
  
  module.exports = UserBankDetail;