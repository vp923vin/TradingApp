const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const SocketStatus = sequelize.define('SocketStatus', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type:  DataTypes.ENUM('0', '1'),
    defaultValue: '0'
  },
  reason: {
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
  tableName: 'socket_status',
  timestamps: false 
});

module.exports = SocketStatus;
