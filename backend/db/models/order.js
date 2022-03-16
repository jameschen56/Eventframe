'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Ticket, { foreignKey: 'ticketId' });
    Order.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Order;
};