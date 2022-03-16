'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    location: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.Ticket, {foreignKey: "eventId"});
    Event.hasMany(models.Like, {foreignKey: "eventId"});
    Event.hasMany(models.Tag, {foreignKey: "eventId"});
    Event.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Event;
};