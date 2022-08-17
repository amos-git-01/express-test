'use strict';
const sequelize = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Safety', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      safety_target: {
        type: Sequelize.INTEGER
      },
      safety_free: {
        type: Sequelize.INTEGER
      },
      today: {
        type: Sequelize.DATEONLY
      },
      safety_text1: {
        type: Sequelize.STRING
      },
      safety_text2: {
        type: Sequelize.STRING
      },
      safety_text3: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Safety');
  }
};