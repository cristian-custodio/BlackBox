$(document).ready(function(){
   

       alert("Users will be loaded");

        var i;
        for (i = 0; i < 10; i++) {
            $("#user-table-transactions-checkings > tbody").append("<tr><td>" + i + "</td><td>" + "2018-08-25" + "</td><td>" + "debit" + 
            "</td><td>" + "$350.56" + "</td></tr>");

            $("#user-table-transactions-savings > tbody").append("<tr><td>" + i + "</td><td>" + "2018-08-25" + "</td><td>" + "debit" + 
            "</td><td>" + "$350.56" + "</td></tr>");
        }

       
});

