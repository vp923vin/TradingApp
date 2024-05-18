const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const StockList = sequelize.define('stock_list', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stock_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  stock_token: {
    type: DataTypes.STRING(50),
    unique: true
  },
  stock_symbol: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  stock_segment: {
    type: DataTypes.ENUM('NSE', 'BSE', 'Commodity'),
    allowNull: false
  },
  stock_exchange: {
    type: DataTypes.ENUM('Equity', 'Intraday', 'F/O', 'Commodity'),
    allowNull: false
  },
  stock_exchange_type: {
    type: DataTypes.STRING(30)
  },
  expiry: {
    type: DataTypes.DATE
  },
  current_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  percent_change: {
    type: DataTypes.DECIMAL(5, 2)
  },
  change: {
    type: DataTypes.DECIMAL(10, 2)
  },
  open: {
    type: DataTypes.DECIMAL(10, 2)
  },
  high: {
    type: DataTypes.DECIMAL(10, 2)
  },
  low: {
    type: DataTypes.DECIMAL(10, 2)
  },
  close: {
    type: DataTypes.DECIMAL(10, 2)
  },
  volume: {
    type: DataTypes.INTEGER
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
  tableName: 'stock_list',
  timestamps: false
});

module.exports = StockList;
