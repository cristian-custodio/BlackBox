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
  res.render("userDashboard");
});


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
