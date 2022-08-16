'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Works', [{
      date: '2022/08/14',
      attendance_staff_LEC: 25,
      attendance_staff_PTNR: 245,
      attendance_worker_LEC: 55,
      attendance_worker_PTNR: 1000,
      attendance_LEC_TOTAL: 80,
      attendance_PTNR_TOTAL: 1245,
      attendance_staff_TOTAL: 270,
      attendance_worker_TOTAL: 1055,
      attendance_SKY: 2,
      attendance_CARGO: 12,
      attendance_PUMPCAR: 5,
      attendance_DOZER: 2,
      attendance_PAYLOADER: 3,
      attendance_DRILL: 2
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Works', null, {});
  }
};
