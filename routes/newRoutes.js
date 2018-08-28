var db = require("../models");

module.exports = function (app) {

    // Post route for Users
    app.post("/api/user", function (req, res) {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            primPhone: req.body.primPhone,
            ssn: req.body.ssn,
            joinDate: req.body.joinDate,
            email: req.body.email,
            password: req.body.password
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    // Put route to update user's row
    app.put("/api/user/:uuid", function (req, res) {
        db.User.update(req.body, {
            where: {
                uuid: req.body.uuid
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    // Delete route for deletings users
    app.delete("/api/user/:uuid", function (req, res) {
        db.User.destroy(req.params, {
            where: {
                uuid: req.params.uuid
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });

        // maybe set update delete route for deleting account simultaneously
    });


    // GET route for accounts 
    app.get("/api/accounts", function (req, res) {
        db.Accounts.findAll({ include: [db.Accounts] })
            .then(function (dbAccounts) {
                res.json(dbAccounts);
            });
    });

    // GET route for single account
    app.get("/api/accounts/:User_UserID", function (req, res) {
        db.Accounts.findOne({
            where: {
                User_UserID: req.params.User_UserID
            }
        }).then(function (dbAccounts) {
            res.json(dbAccounts);
        });
    });

    // Put routes for updating account
    app.put("/api/accounts/:User_UserID", function (req, res) {
        db.Accounts.update(req.body, {
            where: {
                User_UserID: req.body.User_UserID
            }
        }).then(function (dbAccounts) {
            res.json(dbAccounts);
        });
    });

    // Delete route for deleting accounts
    app.delete("/api/accounts/:User_UserID", function (req, res) {
        db.Accounts.update(req.params, {
            where: {
                User_UserID: req.params.User_UserID
            }
        }).then(function (dbAccounts) {
            res.json(dbAccounts);
        });
    });

    // Post route for transactions
    app.post("/api/transactions", function (req, res) {
        db.Transactions.create({
            Accounts_AccountID: req.body.Accounts_AccountID,
            amount: req.body.amount
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });

        // accountNum.balance = balance - amount;
        // update accounts balance here
        // app.put("/api/accounts", function (req, res){
        //     db.Accounts.update(accountNum).then(function (newBalance){
        //         res.json(newBalance);
        //     });
        // });
    });

    // Post route for transfers
    app.post("/api/transfers", function (req, res) {
        db.Transfers.create({
            transferID: req.body.transferID,
            senderID: req.body.senderID,
            senderEmail: req.body.senderEmail,
            amtSent: req.body.amtSent,
            receiverID: req.body.receiverID,
            receiverEmail: req.body.receiverEmail
        }).then(function (dbTransfers) {
            res.json(dbTransfers);
        });

        // accounts.balance = balance + amtSent;
        // update account balance here
        // app.put("/api/accounts", function (req, res){
        //     db.Accounts.update(accountNum).then(function (newBalance){
        //         res.json(newBalance);
        //     });
        // });
    });



}