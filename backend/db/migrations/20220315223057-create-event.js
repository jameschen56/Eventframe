'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      eventDate: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      // price: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // startTime: {
      //   type: Sequelize.STRING(10),
      //   allowNull: false,
      // },
      // endTime: {
      //   type: Sequelize.STRING(10),
      //   allowNull: false,
      // },
      lat: {
        type: Sequelize.DECIMAL
      },
      lng: {
        type: Sequelize.DECIMAL
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "Users" }
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};