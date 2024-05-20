const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 
const User = require('../Models/Users');

const UserDocsVerify = sequelize.define('UserDocsVerify', {
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
    adhar_card_front: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adhar_card_back: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pan_card: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adhar_verified_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pan_verified_at: {
        type: DataTypes.DATE,
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
    tableName: 'user_docs',
    timestamps: false 
  });
  
  module.exports = UserDocsVerify;