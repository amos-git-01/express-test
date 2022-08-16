'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quantities', [{
      date: '2022/08/12',
      q_text1: 'Reactor A 설치완료',
      q_text2: '전기실 공사 착수',
      q_text3: '수전예정일 8월 11일',
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quantities', null, {});

  }
};
