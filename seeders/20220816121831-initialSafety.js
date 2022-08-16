'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Safety', [{
    date: '2022/08/12',
    safety_target: 250,
    safety_free: 240,
    today: '2022/08/14',
    safety_text1: '강풍주의',
    safety_text2: '용접주의',
    safety_text3: '화기작업주의',
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Safety', null, {});
  }
};
