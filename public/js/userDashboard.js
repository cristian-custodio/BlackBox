$(document).ready(function(){

    //Global Variables
    var currentUser = $("#email").val();
    var userID;

    //API Calls for Transaction Information
    $.when(ajax1()).done(function(a1){
    }).then(function () {
        $.ajax({
            type: "POST",
            url: "/api/getTransactions",
            // The key needs to match your method's input parameter (case-sensitive).
            contentType: "application/json; charset=utf-8",
            success: function(result){
                result.forEach(function (arrayItem) {
                    if(userID == arrayItem.Account.UserUuid && arrayItem.Account.acctName === "Checkings") {
                    //Get User Balance
                    $("#checkingBalance").html("$" + arrayItem.Account.balance);
                    $("#user-table-transactions-checkings> tbody").append("<tr><td>" + arrayItem.id + "</td><td>" + arrayItem.createdAt + "</td><td>" + arrayItem.Account.acctName + 
                "</td><td>" + arrayItem.amount + "</td><td>" );
                    }
                });
            },
            failure: function(errMsg) {
                alert(errMsg);
            }
        }).then(function () {
            $.ajax({
                type: "POST",
                url: "/api/getTransactions",
                // The key needs to match your method's input parameter (case-sensitive).
                contentType: "application/json; charset=utf-8",
                success: function(result){
                    result.forEach(function (arrayItem) {
                        console.log(arrayItem.Account.UserUuid);
                        if(userID == arrayItem.Account.UserUuid && arrayItem.Account.acctName === "Savings") {
                        //Get User Balance
                        $("#savingBalance").html("$" + arrayItem.Account.balance);
                        $("#user-table-transactions-savings> tbody").append("<tr><td>" + arrayItem.id + "</td><td>" + arrayItem.createdAt + "</td><td>" + arrayItem.Account.acctName + 
                        "</td><td>" + arrayItem.amount + "</td><td>" );
                        }
                    });
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
            });
        });
    });

    function ajax1() {
    $.ajax({url:`/user/userlookup/${currentUser}`, success: function(result){
        userID = result.uuid;
        console.log(userID);
    }});
    }
});

