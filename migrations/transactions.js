'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      transaction_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      Account_AccountID: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.UUID
      },
      amount: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      transType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      transTime: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      senderEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      receiverEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};
