// models/TradeCharges.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');
const Trades = require('./Trades'); 
const Users = require('./Users'); 

const TradeCharges = sequelize.define('trade_charges', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  trade_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
      model: Trades,
      key: 'trade_id'
    }
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  },
  default_brokerage: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  set_brokerage: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  other_charges: {
    type: DataTypes.DECIMAL(10, 2)
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'trade_charges',
  timestamps: false
});

TradeCharges.belongsTo(Trades, { foreignKey: 'trade_id', targetKey: 'trade_id' });
TradeCharges.belongsTo(Users, { foreignKey: 'uid', targetKey: 'id' });

module.exports = TradeCharges;
