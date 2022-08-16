'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quantities extends Model {}
  Quantities.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.STRING,
    safety_text1: DataTypes.STRING,
    safety_text2: DataTypes.STRING,
    safety_text3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Quantities',
  });
  return Quantities;
};