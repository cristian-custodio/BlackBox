var db = require("../models");

module.exports = function (app) {

    // GET route for single savings account
    app.get("/api/savings/:id", function (req, res) {
        db.Savings.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (savings) {
            res.json(savings);
        });
    });

    // POST route for saving a new savings account
    app.post("/api/savings", function (req, res) {
        db.Checkings.create(req.body).then(function (savings) {
            res.json(savings);
        });
    });

    // DELETE route for deleting savings account
    app.delete("/api/savings/:id", function (req, res) {
        db.Checkings.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (savings) {
            res.json(savings);
        });
    });

    // PUT route for updating posts
  app.put("/api/savings", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(savings) {
      res.json(savings);
    });
  });

}