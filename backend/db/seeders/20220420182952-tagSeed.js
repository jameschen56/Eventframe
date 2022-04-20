'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Tags', [
    // Online
    {
      categoryId: 1,
      eventId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 1,
      eventId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 1,
      eventId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Free 
    {
      categoryId: 2,
      eventId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 2,
      eventId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 2,
      eventId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Food & Drink 
    {
      categoryId: 3,
      eventId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 3,
      eventId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 3,
      eventId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Fashion
    {
      categoryId: 4,
      eventId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 4,
      eventId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 4,
      eventId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 4,
      eventId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Music
    {
      categoryId: 5,
      eventId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId: 5,
      eventId: 15,
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
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
