module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Transactions', [{
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a01',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a01',
        amount: 137.65,
        transType: 'transfer',
        transTime: '2018-03-23',
        senderEmail: 'johnsmith@gmail.com',
        receiverEmail: 'johndoe@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a02',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a01',
        amount: 453.22,
        transType: 'deposit',
        transTime: '2018-03-23',
        senderEmail: '',
        receiverEmail: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a03',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a01',
        amount: 243.97,
        transType: 'withdrawal',
        transTime: '2018-03-24',
        senderEmail: '',
        receiverEmail: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a04',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a02',
        amount: 899.45,
        transType: 'transfer',
        transTime: '2018-03-23',
        senderEmail: 'johnsmith@gmail.com',
        receiverEmail: 'johndoe@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a05',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a02',
        amount: 737.23,
        transType: 'deposit',
        transTime: '2018-03-23',
        senderEmail: '',
        receiverEmail: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        transaction_ID: 'c85b3d10-b064-11e8-973c-25706ac36a06',
        Account_AccountID: 'b85b3d10-b064-11e8-973c-25706ac36a02',
        amount: 905.89,
        transType: 'withdrawal',
        transTime: '2018-03-24',
        senderEmail: '',
        receiverEmail: '',
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
