module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        user_ID: 12478954,
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
