const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 
const Trades = require('./Trades'); 
const Users = require('./Users'); 

const TradeHistory = sequelize.define('trade_history', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Trades,
      key: 'id'
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
  trade_open_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  trade_close_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  trade_name_and_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  limit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  stop_loss: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  target: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  square_off: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  credit_debit: {
    type: DataTypes.ENUM('credit', 'debit'),
    allowNull: false
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
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
  tableName: 'trade_history',
  timestamps: false
});

TradeHistory.belongsTo(Trades, { foreignKey: 'tid', targetKey: 'id' });
TradeHistory.belongsTo(Users, { foreignKey: 'uid', targetKey: 'id' });

module.exports = TradeHistory;
