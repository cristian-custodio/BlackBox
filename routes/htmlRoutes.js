var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("login", {
      msg: "Welcome!"
      
    });
  });

  //Load Create Account Page
  app.get("/createAccount/", function(req, res) {
      res.render("createAccount");
  });

  //Load Admin Dashboard Page
  app.get("/admin/", function(req, res) {
    res.render("adminDashboard");
});

  //Load User Dashboard Page
app.get("/user/:id", function(req, res) {
  db.User.findOne({ where: {email: req.params.id} }).then(function(result) {
    console.log(result);
    //res.json(result);
    res.render("userDashboard", {
      User: result
  });
});
});  

//   db.User.findOne
//     where: {
//         email: req.params.id
//            }
//         }).then(function (dbAccounts) {
//             res.json(dbAccounts);
//             console.log(dbAccounts);
//         });

//         
  
// });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
