'use strict';
module.exports = function(sequelize, DataTypes) {

  var Account = sequelize.define("Account", {
    // Giving the Accounts model an accountNum of type INT
    accounts_ID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    Users_UserID: {
      type: DataTypes.UUID,
      unique: true
    },
    accountNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currentBal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    openBal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    acctType: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [8]
    },
    openDate: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2]
    },
    intRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      len: [12,2]
    }
  });

  // Associates Account and User table because the transaction belongsTo
  // the account table
  Account.associate = function(models) {
    Account.belongsTo(models.User, {
      foreignKey: "accounts_ID",
      constraints: false
    });
  }

  // Associates Account and Transaction table because the account hasMany
  // transactions
  Account.associate = function(models) {
    Account.hasMany(models.Transaction, {
      foreignKey: "Account_AccountsID",
      constraints: false
    });
  }

  return Account;
};
