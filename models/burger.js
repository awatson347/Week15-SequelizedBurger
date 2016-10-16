// Burger Model
// ===============
'use strict';

// EXPORT THIS MODULE TO INDEX.JS
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {type: DataTypes.INTEGER, defaultValue: 0}, // Default = false = not devoured
    date: {type: DataTypes.DATE, defaultValue: sequelize.NOW}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};