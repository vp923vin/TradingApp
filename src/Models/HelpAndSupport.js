const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const HelpAndSupport = sequelize.define('HelpAndSupport', {
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
  ticket_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  query_detail: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  query_status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'resolved', 'closed', 'escalated'),
    defaultValue: 'pending'
  },
  priority: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    defaultValue: 'medium'
  },
  assigned_to: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  resolution: {
    type: DataTypes.TEXT,
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
  tableName: 'help_support',
  timestamps: false 
});

module.exports = HelpAndSupport;
