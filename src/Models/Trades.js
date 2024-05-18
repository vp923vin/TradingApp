const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const Trades = sequelize.define('trades', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trade_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  trade_token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  trade_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trade_mode: {
    type: DataTypes.ENUM('buy', 'sell'),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trade_type: {
    type: DataTypes.ENUM('intraday', 'delivery'),
    allowNull: false
  },
  trade_status: {
    type: DataTypes.ENUM('pending', 'live', 'holding', 'past'),
    allowNull: false
  },
  trade_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  trade_place_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  trade_close_at: {
    type: DataTypes.DATE
  },
  limit: {
    type: DataTypes.DECIMAL(10, 2)
  },
  target: {
    type: DataTypes.DECIMAL(10, 2)
  },
  stop_loss: {
    type: DataTypes.DECIMAL(10, 2)
  },
  allow_to_hold: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  allow_square_off: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_pending: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_processed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trade_outcome: {
    type: DataTypes.STRING
  },
  square_off_at: {
    type: DataTypes.DATE
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
  tableName: 'trades',
  timestamps: false
});

module.exports = Trades;
