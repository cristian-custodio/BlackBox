module.exports = function(sequelize, DataTypes) {

  var Accounts = sequelize.define("Accounts", {
    // Account number, type INT
    accountNum: {
      type: DataTypes.INT,
      len: [9,10]
    },
    // Account balance, type DOUBLE
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    // Account opening balance, type DOUBLE
    openBal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    // Account name, type STRING
    acctName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [8]
    },
    // Account User ID, type UUID
    User_UserID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID3,
      len: [1,50]
    },
    // Account open date, type STRING
    openDate: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2]
    },
    // Account interest rate, type INT (only applies to savings accounts)
    intRate: {
      type: DataTypes.INT,
      allowNull: false,
      len: [14]
    }
  });

  Accounts.associate = function(models) {
    Accounts.belongsTO(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Accounts;
};
