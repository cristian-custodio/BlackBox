var db = require("../models");

module.exports = function (app) {
    // GET routes for transactions of single account
    app.get("/api/transactions/:id", function (req, res) {
        db.Transactions.findOne({
            where: {
                first_name: req.params.first_name,
                last_name: req.params.last_name
            },
            include: [db.Savings, db.Checkings]
        }).then(function (trans) {
            res.json(trans);
        });
    });

    // POST route for saving a new transactions
    app.post("/api/transactions", function (req, res) {
        db.Post.create(req.body).then(function (trans) {
            res.json(trans);
        });
    });

};