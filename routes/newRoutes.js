var db = require("../models");

module.exports = function (app){

    // Post route for Users
    app.post("/api/user", function(req, res){
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
        password:req.body.password
        }).then(function(dbUser){
           res.json(dbUser);
       });
   });
   
    // GET route for accounts 
    app.get("/api/accounts", function(req, res){
        db.Accounts.findAll({include:[db.Accounts]})
        .then(function(dbAccounts){
            res.json(dbAccounts);
        });
    });

    // GET route for single account
    app.get("/api/accounts/:User_UserID", function (req, res){
        db.Accounts.findOne({
            where:{
                User_UserID:req.params.User_UserID
            }
        }).then(function(dbAccounts){
            res.json(dbAccounts);
        });
    });

    // Post route for transactions
    app.post("/api/transactions", function(req,res){
        db.Transactions.create({
            Accounts_AccountID:req.body.Accounts_AccountID,
            amount:req.body.amount
        }).then(function(dbTransactions){
            res.json(dbTransactions);
        });

        // update accounts balance here
    });

    app.post("/api/transfers", function(req, res){
        db.Transfers.create({
            
        })
    })

    
}