'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accounts', {
      account_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      User_UserID: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.UUID
      },
      accountNum: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      currentBal: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      openBal: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      acctType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      openDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      intRate: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
