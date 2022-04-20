'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Categories', [
    {
      category_type: 'Online',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_type: 'Free',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_type: 'Food & Drink',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_type: 'Fashion',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_type: 'Music',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Categories', null, {});
  }
};
