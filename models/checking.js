module.exports = function(sequelize, DataTypes) {
  var Checking = sequelize.define("Checking", {
    // Giving the Checking model a name of type STRING
    name: DataTypes.STRING
  });

  Checking.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Checking.hasMany(models.History, {
      onDelete: "cascade"
    });
  };

  return Checking;
};
