$(document).ready(function(){
        //Populate Checkings Table
        $.ajax({url: "api/getCheckings", success: function(result){
            result.forEach(function (arrayItem) {
                $("#user-table-checkings > tbody").append("<tr><td>" + arrayItem.id + "</td><td>" + arrayItem.User.first_name + "</td><td>" + arrayItem.User.last_name + 
            "</td><td>" + arrayItem.accountNum + "</td><td>" + "$" + arrayItem.balance+ "</td></tr>");
            });
        }});
        
        //Populate Savings Table
        $.ajax({url: "api/getSavings", success: function(result){

            result.forEach(function (arrayItem) {
                $("#user-table-savings > tbody").append("<tr><td>" + arrayItem.id + "</td><td>" + arrayItem.User.first_name + "</td><td>" + arrayItem.User.last_name + 
            "</td><td>" + arrayItem.accountNum + "</td><td>" + "$" + arrayItem.balance+ "</td></tr>");
            });
        }});
});

