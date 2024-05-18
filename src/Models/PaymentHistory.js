const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const PaymentHistory = sequelize.define('PaymentHistory', {
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
  tid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transaction_status: {
    type: DataTypes.ENUM,
    values: ['pending', 'success', 'failed'],
    allowNull: false,
    defaultValue: 'pending'
  },
  transaction_type: {
    type: DataTypes.ENUM,
    values: ['credit', 'debit'],
    allowNull: false,
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
  tableName: 'payment_history',
  timestamps: false 
});

module.exports = PaymentHistory;
