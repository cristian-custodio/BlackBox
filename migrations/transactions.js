'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transaction', {
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
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('User');
  }
};
