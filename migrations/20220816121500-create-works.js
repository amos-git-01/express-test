'use strict';
const sequelize = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Works', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      attendance_staff_LEC: {
        type: Sequelize.INTEGER
      },
      attendance_staff_PTNR: {
        type: Sequelize.INTEGER
      },
      attendance_worker_LEC: {
        type: Sequelize.INTEGER
      },
      attendance_worker_PTNR: {
        type: Sequelize.INTEGER
      },
      attendance_LEC_TOTAL: {
        type: Sequelize.INTEGER
      },
      attendance_PTNR_TOTAL: {
        type: Sequelize.INTEGER
      },
      attendance_staff_TOTAL: {
        type: Sequelize.INTEGER
      },
      attendance_worker_TOTAL: {
        type: Sequelize.INTEGER
      },
      attendance_SKY: {
        type: Sequelize.INTEGER
      },
      attendance_CARGO: {
        type: Sequelize.INTEGER
      },
      attendance_PUMPCAR: {
        type: Sequelize.INTEGER
      },
      attendance_DOZER: {
        type: Sequelize.INTEGER
      },
      attendance_PAYLOADER: {
        type: Sequelize.INTEGER
      },
      attendance_DRILL: {
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
    { sequelize:sequelize, timestamps: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Works');
  }
};