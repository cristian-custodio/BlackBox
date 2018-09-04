module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        user_ID: 'a85b3d10-b064-11e8-973c-25706ac36a01',
        first_name: 'John',
        last_name: 'Doe',
        address: '1738 Fetty Rd',
        city: 'Miami',
        state: 'FL',
        primPhone: 1234567890,
        ssn: 123456789,
        joinDate: "1986-03-23",
        email: 'johndoe@gmail.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        user_ID: 'a85b3d10-b064-11e8-973c-25706ac36a02',
        first_name: 'John',
        last_name: 'Smith',
        address: '123 Cottontail Ln',
        city: 'Los Angeles',
        state: 'CA',
        primPhone: 1234567890,
        ssn: 123456789,
        joinDate: "1986-03-23",
        email: 'johnsmith@gmail.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        user_ID: 'a85b3d10-b064-11e8-973c-25706ac36a03',
        first_name: 'Chris',
        last_name: 'Johnson',
        address: '543 Golden Gate Rd',
        city: 'Seattle',
        state: 'WA',
        primPhone: 1234567890,
        ssn: 123456789,
        joinDate: "1986-03-23",
        email: 'chrisjohnson@gmail.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }],);

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
