const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const ApiStatus = sequelize.define('ApiStatus', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: DataTypes.ENUM('0', '1'),
    defaultValue: '0'
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
  tableName: 'api_status',
  timestamps: false 
});

module.exports = ApiStatus;
