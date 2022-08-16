'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        id: 1,
        name: 'Alex',
        team: "Marketing",
        admin: true
    },
    {
        id: 2,
        name: 'Tom',
        team: "Engineering",
        admin: false
    },
  ]);

},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {});
  },
};
