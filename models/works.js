'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Works extends Model {}
  Works.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.DATEONLY,

    attendance_staff_LEC: DataTypes.INTEGER,
    attendance_staff_PTNR: DataTypes.INTEGER,
    attendance_worker_LEC: DataTypes.INTEGER,
    attendance_worker_PTNR: DataTypes.INTEGER,
    attendance_LEC_TOTAL: DataTypes.INTEGER,
    attendance_PTNR_TOTAL: DataTypes.INTEGER,
    attendance_staff_TOTAL: DataTypes.INTEGER,
    attendance_worker_TOTAL: DataTypes.INTEGER,

    attendance_SKY: DataTypes.INTEGER,
    attendance_CARGO: DataTypes.INTEGER,
    attendance_PUMPCAR: DataTypes.INTEGER,
    attendance_DOZER: DataTypes.INTEGER,
    attendance_PAYLOADER: DataTypes.INTEGER,
    attendance_DRILL: DataTypes.INTEGER,


  }, {
    sequelize,
    modelName: 'Works',
  });
  return Works;
};