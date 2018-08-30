module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Accounts', [{
        account_ID: 12478954,
        User_UserID: 543832490,
        accountNum: 654234975,
        currentBal: 2578.89,
        openBal: 1378.63,
        acctType: 'checking',
        openDate: new Date(2018,06,17),
        intRate: 0.01,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
