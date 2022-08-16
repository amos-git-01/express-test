'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Progress', [
      {
        id: 1,
        date: '2022-08-16',
        prog_plan_E: 10,
        prog_actl_E: 10,
        prog_plan_P: 10,
        prog_actl_P: 10,
        prog_plan_C: 10,
        prog_actl_C: 10,
        prog_plan_TTL: 10,
        prog_actl_TTL: 10,

        prog_plan_disc_CV: 10,
        prog_actl_disc_CV: 10,
        prog_plan_disc_AR: 10,
        prog_actl_disc_AR: 10,
        prog_plan_disc_ST: 10,
        prog_actl_disc_ST: 10,
        prog_plan_disc_MR: 10,
        prog_actl_disc_MR: 10,
        prog_plan_disc_MS: 10,
        prog_actl_disc_MS: 10,
        prog_plan_disc_PI: 10,
        prog_actl_disc_PI: 10,
        prog_plan_disc_EL: 10,
        prog_actl_disc_EL: 10,
        prog_plan_disc_IN: 10,
        prog_actl_disc_IN: 10,
        prog_plan_disc_PT: 10,
        prog_actl_disc_PT: 10,
        prog_plan_disc_TTL: 10,
        prog_actl_disc_TTL: 10,
    },
    {
      id: 2,
      date: '2022-08-23',
      prog_plan_E: 10,
      prog_actl_E: 10,
      prog_plan_P: 10,
      prog_actl_P: 10,
      prog_plan_C: 10,
      prog_actl_C: 10,
      prog_plan_TTL: 10,
      prog_actl_TTL: 10,

      prog_plan_disc_CV: 10,
      prog_actl_disc_CV: 10,
      prog_plan_disc_AR: 10,
      prog_actl_disc_AR: 10,
      prog_plan_disc_ST: 10,
      prog_actl_disc_ST: 10,
      prog_plan_disc_MR: 10,
      prog_actl_disc_MR: 10,
      prog_plan_disc_MS: 10,
      prog_actl_disc_MS: 10,
      prog_plan_disc_PI: 10,
      prog_actl_disc_PI: 10,
      prog_plan_disc_EL: 10,
      prog_actl_disc_EL: 10,
      prog_plan_disc_IN: 10,
      prog_actl_disc_IN: 10,
      prog_plan_disc_PT: 10,
      prog_actl_disc_PT: 10,
      prog_plan_disc_TTL: 10,
      prog_actl_disc_TTL: 10,
  },
  ]);

},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Progress', null, {});
  },
};
