'use strict';
module.exports = function(sequelize, DataTypes) {
  var trip = sequelize.define('trip', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return trip;
};
