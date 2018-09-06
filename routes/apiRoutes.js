var db = require("../models");
var passport = require("../helpers/passport.js");

module.exports = function (app) {

    //Authentication Routes
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
         if(req.user.email === "admin@blackboxbank.com") {
            res.json('/admin');

        } else {
            res.json('/user/' + req.user.email);
        }
    });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    // Post route for Create User Account
    app.post("/api/user", function (req, res) {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            primPhone: req.body.primPhone,
            ssn: req.body.ssn,
            joinDate: new Date().toDateString(),
            email: req.body.email,
            password: req.body.password
        }).then(function (dbUser) {

            //Create Checkings Account
            db.Accounts.create({
                accountNum: Math.floor(Math.random() * 9999999),
                balance: 250,
                openBal: 0,
                acctName: "Checkings",
                openDate: new Date().toDateString(),
                interestRate: 4,
                UserUuid: dbUser.uuid
            })
            //Create Savings Account
            db.Accounts.create({
                accountNum: Math.floor(Math.random() * 9999999),
                balance: 250,
                openBal: 0,
                acctName: "Savings",
                openDate: new Date().toDateString(),
                interestRate: 4,
                UserUuid: dbUser.uuid
            })

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



    // GET Route (Get all Checking Accounts & User Data)
    app.get("/api/getCheckings", function (req, res) {
        db.Accounts.findAll({ include: [{model: db.User,required: true}], 
            where: {
                acctName: 'Checkings'
            }})
            .then(function (dbAccounts) {
                res.json(dbAccounts);
            });
    });

    // GET Route (Get all Saving Accounts & User Data)
    app.get("/api/getSavings", function (req, res) {
        db.Accounts.findAll({ include: [{model: db.User,required: true}], 
            where: {
                acctName: 'Savings'
            }})
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


    //Get Route for getting transactions by user/account
    app.post("/api/getTransactions", function (req, res) {
        db.Transactions.findAll({ include: [{model: db.Accounts,required: true}], 
            })
            .then(function (transactions) {
                res.json(transactions);
            });
    });


    // Post route for transactions
    app.post("/api/transactions", function (req, res) {
        db.Transactions.create({
            Accounts_AccountID: req.body.Accounts_AccountID,
            AccountId: req.body.AccountId,
            amount: req.body.amount
        }).then(function (dbTransactions) {
            res.json(dbTransactions);
        });

    
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


    app.get("/user/userlookup/:id", function(req, res) {
        db.User.findOne({ where: {email: req.params.id} }).then(function(result) {
          res.json(result);
      });
      });  

}

