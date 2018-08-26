$(document).ready(function(){
   

       alert("Users will be loaded");

        var i;
        for (i = 0; i < 10; i++) {
            $("#user-table-checkings > tbody").append("<tr><td>" + i + "</td><td>" + "Cristian" + "</td><td>" + "Custodio" + 
            "</td><td>" + "486518765" + "</td><td>" + "580.65" + "</td></tr>");

            $("#user-table-savings > tbody").append("<tr><td>" + i + "</td><td>" + "Cristian" + "</td><td>" + "Custodio" + 
            "</td><td>" + "486518765" + "</td><td>" + "580.65" + "</td></tr>");

        }

       
});

