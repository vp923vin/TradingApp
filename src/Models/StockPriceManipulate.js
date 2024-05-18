const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 
const StockList = require('./StockList'); 

const StockPriceSet = sequelize.define('stock_price_set', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stock_token: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: StockList,
      key: 'stock_token'
    }
  },
  stock_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  expiry_time: {
    type: DataTypes.DATE,
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
  tableName: 'stock_price_set',
  timestamps: false
});

module.exports = StockPriceSet;
