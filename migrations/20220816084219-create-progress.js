'use strict';
const sequelize = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Progress', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      prog_plan_E: {
        type: Sequelize.INTEGER
      },
      prog_actl_E: {
        type: Sequelize.INTEGER
      },
      prog_plan_P: {
        type: Sequelize.INTEGER
      },
      prog_actl_P: {
        type: Sequelize.INTEGER
      },
      prog_plan_C: {
        type: Sequelize.INTEGER
      },
      prog_actl_C: {
        type: Sequelize.INTEGER
      },
      prog_plan_TTL: {
        type: Sequelize.INTEGER
      },
      prog_actl_TTL: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_CV: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_CV: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_AR: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_AR: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_ST: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_ST: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_MR: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_MR: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_MS: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_MS: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_PI: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_PI: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_EL: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_EL: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_IN: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_IN: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_PT: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_PT: {
        type: Sequelize.INTEGER
      },
      prog_plan_disc_TTL: {
        type: Sequelize.INTEGER
      },
      prog_actl_disc_TTL: {
        type: Sequelize.INTEGER
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    },
    { sequelize:sequelize, timestamps: true, freezeTableName: true,
      tableName: 'progress',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('progress');
  }
};
