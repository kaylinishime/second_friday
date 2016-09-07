'use strict';
module.exports = function(sequelize, DataTypes) {
  var board = sequelize.define('board', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      
      }
    }
  });
  return board;
};
