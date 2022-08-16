'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Safety extends Model {}
  Safety.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.STRING,
    safety_target: DataTypes.INTEGER,
    safety_free: DataTypes.INTEGER,
    today: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Safety',
  });
  return Safety;
};