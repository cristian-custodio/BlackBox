module.exports = function(sequelize, DataTypes) {

  var Transactions = sequelize.define("Transactions", {
    // Giving the Transactions model an amount of type DOUBLE
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    // Giving the Transactions model an accountid of type uuid
    Accounts_AccountID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID3,
      len: [9,10]
    },
    // Giving the Transactions model a dateTime of DATE
    dateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Transactions.associate = function(models) {
    Transactions.belongsTO(models.Accounts, {
      foreignKey: Accounts_AccountID,
      targetKey: accountNum
    });
  }

  return Transactions;
};
