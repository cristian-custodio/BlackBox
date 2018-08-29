module.exports = function(sequelize, DataTypes) {

  var Accounts = sequelize.define("Accounts", {
    // Giving the Accounts model an accountNum of type INT
    accountNum: {
      type: DataTypes.INTEGER,
      len: [9,10]
    },
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    openBal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      len: [1,50]
    },
    acctName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [8]
    },
    User_UserID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV3,
      len: [1,50]
    },
    openDate: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2]
    },
    interestRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [14]
    }
  });

  Accounts.associate = function(models) {
    Accounts.belongsTO(models.User, {
      foreignKey: User_UserID,
      targetKey: uuid
    });
  }

  return Accounts;
};
