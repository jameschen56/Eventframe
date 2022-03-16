'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    categoryId: DataTypes.STRING,
    eventId: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.Event, {foreignKey: 'eventId'});
    Tag.belongsTo(models.Category, {foreignKey: 'categoryId'});
  };
  return Tag;
};