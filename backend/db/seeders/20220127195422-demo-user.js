'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'maryjones@email.com',
        username: 'maryjones65',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        email: 'johngray@email.com',
        username: 'jgray',
        hashedPassword: bcrypt.hashSync('password123!')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'maryjones65', 'jgray'] }
    }, {});
  }
};
