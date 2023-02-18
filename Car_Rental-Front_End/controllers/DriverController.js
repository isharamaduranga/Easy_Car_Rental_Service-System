/** Back end Request URL */
let baseURLDriverControl ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExDriverUsername = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExDriverName = /^[A-Z|a-z\s]{3,20}$/;
var regExDriverContact = /^(071-|077-|075-|078-|)[0-9]{7}$/;
var regExDriverAge = /^[1-9]{1,2}$/;
var regExDriverAddress = /^[0-9A-Z a-z,/:]{4,50}$/;

$("#driverUsername").keyup(function (event) {
    let username = $("#driverUsername").val();
    if (regExDriverUsername.test(username)) {
        $("#driverUsername").css('border', '2px solid #31d2f2');
        $("#errorDriverUsername").text("");
        if (event.key == "Enter") {
            $("#driverPassword").focus();
        }
    } else {
        $("#driverUsername").css('border', '2px solid red');
        $("#errorDriverUsername").text("Check this field is that correct !");
    }
});

$("#driverPassword").keyup(function (event) {
    let password = $("#driverPassword").val();
    if (regExDriverPassword.test(password)) {
        $("#driverPassword").css('border', '2px solid #31d2f2');
        $("#errorDPassword").text("");
        if (event.key == "Enter") {
            $("#driverName").focus();
        }
    } else {
        $("#driverPassword").css('border', '2px solid red');
        $("#errorDPassword").text("Check this field is that correct !");
    }
});

$("#driverName").keyup(function (event) {
    let name = $("#driverName").val();
    if (regExDriverName.test(name)) {
        $("#driverName").css('border', '2px solid #31d2f2');
        $("#errorDName").text("");
        if (event.key == "Enter") {
            $("#driverAddress").focus();
        }
    } else {
        $("#driverName").css('border', '2px solid red');
        $("#errorDName").text("Check this field is that correct !");
    }
});

$("#driverAddress").keyup(function (event) {
    let address = $("#driverAddress").val();
    if (regExDriverAddress.test(address)) {
        $("#driverAddress").css('border', '2px solid #31d2f2');
        $("#errorDAddress").text("");
        if (event.key == "Enter") {
            $("#driverAge").focus();
        }
    } else {
        $("#driverAddress").css('border', '2px solid red');
        $("#errorDAddress").text("Check this field is that correct !");
    }
});

$("#driverAge").keyup(function (event) {
    let age = $("#driverAge").val();
    if (regExDriverAge.test(age)) {
        $("#driverAge").css('border', '2px solid #31d2f2');
        $("#errorDAge").text("");
        if (event.key == "Enter") {
            $("#driverContact").focus();
        }
    } else {
        $("#driverAge").css('border', '2px solid red');
        $("#errorDAge").text("Check this field is that correct !");
    }
});

$("#driverContact").keyup(function (event) {
    let contact = $("#driverContact").val();
    if (regExDriverContact.test(contact)) {
        $("#driverContact").css('border', '2px solid #31d2f2');
        $("#errorDContact").text("");

    } else {
        $("#driverContact").css('border', '2px solid red');
        $("#errorDContact").text("Check this field is that correct !");
    }
});

