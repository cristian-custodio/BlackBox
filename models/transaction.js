'use strict';
module.exports = function(sequelize, DataTypes) {

  var Transaction = sequelize.define("Transaction", {
    // Giving the Transactions model an transaction_ID of type Integer
    transaction_ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    // Giving the Transactions model an Account_AccountsID of type UUID
    Account_AccountID: {
      type: DataTypes.UUID,
      unique: true
    },
    // Giving the Transactions model an amount of type DOUBLE
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    // Giving the Transactions model an accountid of type uuid
    transType: {
      type: DataTypes.STRING,
      len: [9,10]
    },
    // Giving the Transactions model a dateTime of DATE
    transTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    // Giving the Transactions model a senderEmail of type STRING
    senderEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Giving the Transactions model a senderEmail of type STRING
    receiverEmail: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // Associates Transaction and Account table because the transaction belongsTo
  // the account table
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Account, {
      foreignKey: "account_ID",
      constraints: false
    });
  }

  return Transaction;
};
