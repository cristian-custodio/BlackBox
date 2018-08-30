'use strict';
module.exports = function(sequelize, DataTypes) => {

  var Account = sequelize.define("Account", {
    // Giving the Accounts model an accountNum of type INT
    accounts_ID: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    Users_UserID: {
      type: DataTypes.UUID,
      foreignKey: true
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

  Accounts.associate = function(models) {
    Accounts.belongsTo(models.User, {
      foreignKey: "accounts_ID",
    });
  }

  Accounts.associate = function(models) {
    Accounts.hasMany(models.Transactions, {
      foreignKey: "User_UserID"
    });
  }

  return Accounts;
};
