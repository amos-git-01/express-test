'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {}
  Progress.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.STRING,
    
    prog_plan_E: DataTypes.INTEGER,
    prog_actl_E: DataTypes.INTEGER,
    prog_plan_P: DataTypes.INTEGER,
    prog_actl_P: DataTypes.INTEGER,
    prog_plan_C: DataTypes.INTEGER,
    prog_actl_C: DataTypes.INTEGER,
    prog_plan_TTL: DataTypes.INTEGER,
    prog_actl_TTL: DataTypes.INTEGER,

    prog_plan_disc_CV: DataTypes.INTEGER,
    prog_actl_disc_CV: DataTypes.INTEGER,
    prog_plan_disc_AR: DataTypes.INTEGER,
    prog_actl_disc_AR: DataTypes.INTEGER,
    prog_plan_disc_ST: DataTypes.INTEGER,
    prog_actl_disc_ST: DataTypes.INTEGER,
    prog_plan_disc_MR: DataTypes.INTEGER,
    prog_actl_disc_MR: DataTypes.INTEGER,
    prog_plan_disc_MS: DataTypes.INTEGER,
    prog_actl_disc_MS: DataTypes.INTEGER,
    prog_plan_disc_PI: DataTypes.INTEGER,
    prog_actl_disc_PI: DataTypes.INTEGER,
    prog_plan_disc_EL: DataTypes.INTEGER,
    prog_actl_disc_EL: DataTypes.INTEGER,
    prog_plan_disc_IN: DataTypes.INTEGER,
    prog_actl_disc_IN: DataTypes.INTEGER,
    prog_plan_disc_PT: DataTypes.INTEGER,
    prog_actl_disc_PT: DataTypes.INTEGER,
    prog_plan_disc_TTL: DataTypes.INTEGER,
    prog_actl_disc_TTL: DataTypes.INTEGER,

  
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};