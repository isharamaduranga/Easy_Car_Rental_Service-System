/** Back end Request URL */
let baseURLLogin = "http://localhost:8080/Car_Rental_Back_End_war/"

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#loginusername, #logindrivername").keyup(function (event) {
    let username = $(this).val();
    if (regExLoginUserName.test(username)) {
        $(this).css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#loginpassword").focus();
            $("#logindriverpassword").focus();
        }
    } else {
        $(this).css('border', '2px solid red');
    }
});

$("#loginpassword, #logindriverpassword").keyup(function (event) {
    let password = $(this).val();
    if (regExLoginPassword.test(password)) {
        $(this).css('border', '2px solid #31d2f2');
    } else {
        $(this).css('border', '2px solid red');
    }
});



/** For Customer Login the System*/
$("#btnLogToSystem").click(function () {

    if ($("#loginusername").val() == "" || $("#loginpassword").val() == "") {
        alert("All Fields Are Required To Log !");
    } else {
        isExistsCus($("#loginusername").val(), $("#loginpassword").val());
    }

});

/** For Driver Login the System*/
$("#btnLogToDriver").click(function () {

    if ($("#logindrivername").val() == "" || $("#logindriverpassword").val() == "") {
        alert("All Fields Are Required To Log !");
    } else {
        isExistsDriver($("#logindrivername").val(), $("#logindriverpassword").val());
    }

});

function isExistsCus(username, password) {
    $.ajax({
        url: baseURLLogin + "user/" + password + "/" + username,
        method: "GET",
        success: function (response) {
            if (response.data.username == $("#loginusername").val() && response.data.password == $("#loginpassword").val()) {
                searchCustomerTable(response.data.userId);
            }
        },
        error: function (error) {
            alert("Wrong Username And Password !");
        }
    });
}

function isExistsDriver(username, password) {
    $.ajax({
        url: baseURLLogin + "user/" + password + "/" + username,
        method: "GET",
        success: function (response) {
            if (response.data.username == $("#logindrivername").val() && response.data.password == $("#logindriverpassword").val()) {
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
        url: baseURLLogin + "customer/USER/" + userId,
        method: "GET",
        success: function (response) {

            alert("Successfully Login Customer Table....")

            /*  =======================Log in Customer car booking=========================================*/
            bookingPage();
            /*     ***************************************************************       */
        },
        error: function (error) {
            alert("No Such Customer..! Please Check again");
        }
    });
}


/** Scan username password Driver table */
function searchDriverTable(userId) {
    $.ajax({
        url: baseURLLogin + "driver/USER/" + userId,
        method: "GET",
        success: function (response) {

            /*  =======================Log in Driver schedules=========================================*/
            searchSchedule();
            /*     ***************************************************************       */

            alert("Successfully Login Driver Table....")
        },
        error: function (error) {
           // alert(JSON.parse(error.responseText).message);
            alert("No Such Driver..! Please Check again");
        }
    });
}