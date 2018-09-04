module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Transactions', [{
        transaction_ID: 12478954,
        Account_AccountID: 543832490,
        amount: 137.65,
        transType: 'transfer',
        transTime: '2018-03-23',
        senderEmail: 'johnsmith@gmail.com',
        receiverEmail: 'drphil@gmail.com',
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
