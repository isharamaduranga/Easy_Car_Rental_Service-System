
/** Back end Request URL */
let baseURLLogin ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#loginusername").keyup(function (event) {
    let username = $("#loginusername").val();
    if (regExLoginUserName.test(username)) {
        $("#loginusername").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#loginpassword").focus();
        }
    } else {
        $("#loginusername").css('border', '2px solid red');
    }
});

$("#loginpassword").keyup(function (event) {
    let password = $("#loginpassword").val();
    if (regExLoginPassword.test(password)) {
        $("#loginpassword").css('border', '2px solid #31d2f2');

    } else {
        $("#loginpassword").css('border', '2px solid red');
    }
});

var logStatus;

$("#btnLogToSystem").click(function () {

    if ($("#loginusername").val() == "" || $("#loginpassword").val() == ""){
        alert("All Fields Are Required To Log !");
    }else {
        isExists($("#loginusername").val(),$("#loginpassword").val());
    }

});

function isExists( username, password) {
    $.ajax({
        url: baseURLLogin+"user/" + password +"/"+username,
        method: "GET",
        success: function (response) {
            if (response.data.username == $("#loginusername").val() && response.data.password == $("#loginpassword").val()) {
                searchCustomerTable(response.data.userId);
                searchDriverTable(response.data.userId);
            }
        },
        error: function (error) {
            alert("Wrong Username And Password !");
        }
    });
}


/** Scan username password Customer table */
function searchCustomerTable(userId) {
    $.ajax({
        url: baseURLLogin+"customer/USER/" + userId,
        method: "GET",
        success: function (response) {
            logStatus = "Logged";
            alert("Successfully Login ....")

 /*  =======================Log in Customer car booking=========================================*/
           /* DefaultHomePage();*/
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}
/** Scan username password Driver table */
function searchDriverTable(userId) {
    $.ajax({
        url: baseURLLogin+"driver/USER/" + userId,
        method: "GET",
        success: function (response) {
            logStatus = "Logged";
           // searchDriverSchedule();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}