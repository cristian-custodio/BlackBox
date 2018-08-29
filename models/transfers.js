module.exports = function(sequelize, DataTypes) {

  var Transfers = sequelize.define("Transfers", {
    // Transfer ID, type STRING
    transferID: {
      type: DataTypes.UUID,
      defaultValue: UUIDV3,
      primaryKey: true
    },
    // Transferring sendersID, type STRING
    senderID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Transfer sender email, type STRING
    senderEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Transfer amount, type DOUBLE
    amtSent: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    // Transfer time, type NOW
    timeOfTransfer: {
      type: DataTypes.DATE,
      default: DataTypes.NOW
    },
    // Transfer receivers ID, type STRING
    receiverID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Transfer receivers email
    receiverEmail: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Transfers.associate = function(models) {
    Transfers.belongsTO(models.Accounts, {
      foreignKey: transferID,
      targetKey: accountNum
    });
  }

  return Transfers;
};
