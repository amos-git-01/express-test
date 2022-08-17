'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Safety extends Model {}
  Safety.init({
    date: DataTypes.DATEONLY,
    safety_target: DataTypes.INTEGER,
    safety_free: DataTypes.INTEGER,
    today: DataTypes.DATEONLY,
    safety_text1: DataTypes.STRING,
    safety_text2: DataTypes.STRING,
    safety_text3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Safety',
    freezeTableName: true,
    tableName: 'Safety'
  });
  return Safety;
};