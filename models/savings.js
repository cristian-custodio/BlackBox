module.exports = function(sequelize, DataTypes) {
  var Savings = sequelize.define("Savings", {
    // Giving the Savings model a name of type STRING
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
