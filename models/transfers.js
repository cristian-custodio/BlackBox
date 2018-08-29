module.exports = function(sequelize, DataTypes) {

  var Transfers = sequelize.define("Transfers", {
    // Transfer ID, type STRING
    transferID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV3,
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
      defaultValue: DataTypes.Now 
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

  return Transfers;
};
