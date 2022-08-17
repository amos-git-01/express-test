'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quantities extends Model {}
  Quantities.init({
    date: DataTypes.STRING,
    q_text1: DataTypes.STRING,
    q_text2: DataTypes.STRING,
    q_text3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quantities',
    freezeTableName: true,
    tableName: 'Quantities'
  });
  return Quantities;
};