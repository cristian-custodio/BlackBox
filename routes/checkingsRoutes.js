var db = require("../models");

module.exports = function (app) {

    // GET route for single checkings account
    app.get("/api/checkings/:id", function (req, res) {
        db.Checkings.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (check) {
            res.json(check);
        });
    });

    // POST route for saving a new checkings account
    app.post("/api/checkings", function (req, res) {
        db.Checkings.create(req.body).then(function (check) {
            res.json(check);
        });
    });

    // DELETE route for deleting checkings account
    app.delete("/api/checkings/:id", function (req, res) {
        db.Checkings.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (check) {
            res.json(check);
        });
    });


};