module.exports = function(sequelize, DataTypes) {

  var Transactions = sequelize.define("Transactions", {
    // Transaction amount, type DOUBLE
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    // Transactions to account id, type uuid
    Accounts_AccountID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID3
      len: [9,10]
    },
    // Transactions datetime, type NOW
    dateTime: {
      DataTypes.NOW
    }
  });

  Transactions.associate = function(models) {
    Transactions.belongsTO(models.Accounts, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Transactions;
};
