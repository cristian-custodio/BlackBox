$(document).ready(function(){
    $('#submit').click(function(){
        alert("The paragraph was clicked.");
        handleFormSubmit();
    });

//Reference of Elements
var $firstName = $("#first_name");
var $lastName = $("#last_name");
var $address = $("#address");
var $city = $("#city");
var $state = $("#state");
var $phone = $("#phone");
var $ssn = $("#ssn");
var $email = $("#email");
var $password = $("#password");

//Submit Form Function
var handleFormSubmit = function(event) {
    var newUser = {
      first_name: $firstName.val().trim(),
      last_name: $lastName.val().trim(),
      address: $address.val().trim(),
      city: $city.val().trim(),
      state: $state .val().trim(),
      primPhone: $phone.val().trim(),
      ssn: $ssn.val().trim(),
      email: $email.val().trim(),
      password: $password.val().trim(),
      
    };
  
    if (!(newUser.first_name && newUser.last_name)) {
      alert("You must enter an example text and description!");
      return;
    }
  
    API.saveUser(newUser).then(function() {
    });
  };
  
//API Call Definitions
var API = {
    saveUser: function(newUser) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/user",
        data: JSON.stringify(newUser)
      });
    }
  };
});


