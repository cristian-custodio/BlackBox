module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Accounts', [{
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a01',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a01',
        accountNum: 's000000001',
        currentBal: 4578.89,
        openBal: 0,
        acctType: 'savings',
        openDate: new Date(2018,06,17),
        intRate: '0.01',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a02',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a01',
        accountNum: 'c00000001',
        currentBal: 2578.27,
        openBal: 0,
        acctType: 'checking',
        openDate: new Date(2018,06,17),
        intRate: '0.00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a03',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a02',
        accountNum: "s000000002",
        currentBal: 9871.44,
        openBal: 0,
        acctType: 'savings',
        openDate: new Date(2018,06,17),
        intRate: '0.01',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a04',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a02',
        accountNum: 'c00000002',
        currentBal: 1372.37,
        openBal: 0,
        acctType: 'checking',
        openDate: new Date(2018,06,17),
        intRate: '0.00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a05',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a03',
        accountNum: 's000000003',
        currentBal: 12483.96,
        openBal: 0,
        acctType: 'savings',
        openDate: new Date(2018,06,17),
        intRate: '0.01',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        account_ID: 'b85b3d10-b064-11e8-973c-25706ac36a06',
        User_UserID: 'a85b3d10-b064-11e8-973c-25706ac36a03',
        accountNum: 'c00000003',
        currentBal: 6729.11,
        openBal: 0,
        acctType: 'checking',
        openDate: new Date(2018,06,17),
        intRate: '0.00',
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
