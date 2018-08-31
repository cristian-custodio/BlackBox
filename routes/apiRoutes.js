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
            res.status(201).json(dbUser);
        }).catch(function (err){
            res.status(400).send(err);
        });
    });

    // Put route to update user's row
    app.put("/api/user/:User_ID", function (req, res) {
        db.User.findOne({
            where: {
                User_ID: req.params.User_ID
            }
        }).then(function (usersId) {
            var userId = usersId;

            db.User.update(req.body, userId)
            .then(function (dbUser) {
                res.status(200).json(dbUser);
            }).catch(function (err){
                res.status(404).send(err);
            });
        });
    })


    // GET route for accounts 
    app.get("/api/accounts", function (req, res) {
        db.Account.findAll({ include: [db.Account] })
            .then(function (dbAccounts) {
                res.status(200).json(dbAccounts);
            }).catch(function (err){
                res.status(401).send(err);
    });

    // GET route for single account
    app.get("/api/accounts/:User_ID", function (req, res) {
        db.Account.findOne({
            where: {
                User_ID: req.params.User_ID
            }
        }).then(function (dbAccounts) {
            res.status(200).json(dbAccounts);
        }).catch(function(err){
            res.status(401).send(err);
        });
    });

    // Put routes for updating account
    app.put("/api/accounts/:User_UserID", function (req, res) {
        db.Account.findOne({
            where: {
                User_ID: req.params.User_ID
            }
        }).then(function (thisAccount) {

            db.Account.update(req.body, thisAccount
            ).then(function (dbAccounts) {
                res.status(200).json(dbAccounts);
            }).catch(function (err){
                res.status(400).send(err);
            });

        });

    });

    // Get route for all transactions
    app.get("/api/transactions", function (req, res) {
        db.Transaction.findAll({
            include: [db.Transaction]
        }).then(function (allTransactions) {
            res.status(200).json(allTransactions);
        }).catch(function (err){
            res.status(404).send(err);
        })
});

// Get route for one transactions
app.get("/api/transactions/:transactions_ID", function (req, res) {
    db.transaction.findOne({
        where: {
            transaction_ID: req.params.transaction_ID
        }
    }).then(function (oneTransaction) {
        res.status(200).json(oneTransaction);
    }).catch(404).send(err);
});


// Post route for transactions
app.post("/api/transactions", function (req, res) {

    db.Account.findOne({
        where: {
            User_ID: req.params.User_ID
        }
    }).then(function (accounts) {
        var account = accounts;

        db.Transaction.create({
            Accounts_AccountID: req.body.Accounts_AccountID,
            amount: req.body.amount
        }).then(function (dbTransactions) {
            var transaction = dbTransactions;
            var acctBal = account.balance - dbTransactions.amount;

            // update accounts balance here
            db.Account.update(acctBal).then(function (currentBalance) {
                var obj = {
                    balance: currentBalance,
                    transaction: transaction
                }
                res.status(202).json(obj);
            }).catch(function(err){
                res.status(406).send(err);
            })
        });
    });

});
});
}

