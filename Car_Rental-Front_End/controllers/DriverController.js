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

function generateDriverIds() {
    $("#driverId").val("D00-0001");
    var test = "id";

    $.ajax({
        url: baseURLDriverControl+"driver?test="+test,
        method: "GET",
        success: function (response) {
            var driverId = response.data;
            var tempId = parseInt(driverId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#driverId").val("D00-000" + tempId);
            } else if (tempId <= 99) {
                $("#driverId").val("D00-00" + tempId);
            } else if (tempId <= 999) {
                $("#driverId").val("D00-0" + tempId);
            } else {
                $("#driverId").val("D00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

$("#btnAddNewDriver").click(function () {
    $("#tblDriver tbody > tr").off("click");

    let text = "Do you want to save this driver ?";

    if (confirm(text) == true) {
        if ($("#driverUsername").val() == "" || $("#driverPassword").val() == "" || $("#driverName").val() == "" || $("#driverAddress").val() == "" ||
            $("#driverAge").val() == "" || $("#driverContact").val() == "" || $("#driverReleaseOrNot option:selected").val() == ""){
            alert("All Fields Are Required !");
        }else {
            if ($("#errorDriverUsername").text() != "" || $("#errorDName").text() != "" || $("#errorDPassword").text() != "" || $("#errorDAddress").text() != "" ||
                $("#errorDAge").text() != "" || $("#errorDContact").text() != ""){
                alert("Check Input Fields Whether Correct !");
            }else {
                addNewDriver();
            }
        }
    }else {

    }
});

function addNewDriver() {
    var user={
        userId:$("#generateUserId").text(),
        username:$("#driverUsername").val(),
        password: $("#driverPassword").val()
    }

    var driverDetail = {
        driverId: $("#driverId").val(),
        users:user,
        driverName: $("#driverName").val(),
        driverAddress: $("#driverAddress").val(),
        driverAge: $("#driverAge").val(),
        driverContact: $("#driverContact").val(),
        releaseOrNot: $("#driverReleaseOrNot option:selected").text()
    }

    $.ajax({
        url: baseURLDriverControl+"driver",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(driverDetail),
        success: function (response) {
            if (response.code == 200){
                registerUser(user);
                alert($("#driverId").val() + " "+ response.message);
                generateDriverIds();
                generateUserIds();
                loadAllDrivers();
                clearDriverFields();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function loadAllDrivers() {
    $.ajax({
        url: baseURLDriverControl+"driver",
        method: "GET",
        success: function (response) {

            $("#tblDriver tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.driverId} </td><td> ${responseKey.driverName} </td><td> ${responseKey.driverAddress} </td><td> ${responseKey.driverAge} </td><td> ${responseKey.driverContact} </td><td> <span class="badge rounded-pill text-bg-success fs-6">${responseKey.releaseOrNot}</span> </td>
                <td><button type="button" id="btnEditDriver"  class="btn btn-danger btn-sm px-3" data-ripple-color="dark">
                     <i class="fas fa-pen-alt"></i>
                </button></td></tr>`;
                $("#tblDriver tbody").append(raw);
            }

            generateDriverIds();
            clearDriverFields();
            clickDriverTableRow();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var tblDriverRow =-1;

function clickDriverTableRow() {
    $("#tblDriver tbody > tr").click(function () {

        tblDriverRow = $(this);

        let text = "Do you want to update driver ?";

        if (confirm(text) == true) {
            $('#DriverManagePage').css('transform','scale(1)');

            var driverId = $.trim(tblDriverRow.children(':nth-child(1)').text());
            var driverName = $.trim(tblDriverRow.children(':nth-child(2)').text());
            var driverAddress = $.trim(tblDriverRow.children(':nth-child(3)').text());
            var driverAge = $.trim(tblDriverRow.children(':nth-child(4)').text());
            var driverContact = $.trim(tblDriverRow.children(':nth-child(5)').text());

            $("#driverReleaseOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblDriverRow.children(':nth-child(6)').text())));

            $("#driverId").val(driverId);
            $("#driverName").val(driverName);
            $("#driverAddress").val(driverAddress);
            $("#driverAge").val(driverAge);
            $("#driverContact").val(driverContact);

            findUserNameAndPassword(driverId);

        } else {}
    });
}

findUserNameAndPassword();

function findUserNameAndPassword(driverId) {
    $.ajax({
        url: baseURLDriverControl+"driver/" + driverId,
        method: "GET",
        success: function (response) {
            $("#driverUsername").val(response.data.users.username);
            $("#driverPassword").val(response.data.users.password);
            $("#driverUserId").val(response.data.users.userId);
        },
        error: function (ob) {

        }
    });
}

$("#btnEditPreDriver").click(function () {
    $("#tblDriver tbody > tr").off("click");

    let text = "Do you want to update this driver ?";

    if (confirm(text) == true) {
        if ($("#driverUsername").val() == "" || $("#driverPassword").val() == "" || $("#driverName").val() == "" || $("#driverAddress").val() == "" ||
            $("#driverAge").val() == "" || $("#driverContact").val() == "" || $("#driverReleaseOrNot option:selected").val() == ""){
            alert("All Fields Are Required !");
        }else {
            if ($("#errorDriverUsername").text() != "" || $("#errorDName").text() != "" || $("#errorDPassword").text() != "" || $("#errorDAddress").text() != "" ||
                $("#errorDAge").text() != "" || $("#errorDContact").text() != ""){
                alert("Check Input Fields Whether Correct !");
            }else {
                updateDriver();
            }
        }
    }else {

    }

});

function updateDriver() {
    var user={
        userId:$("#driverUserId").text(),
        username:$("#driverUsername").val(),
        password: $("#driverPassword").val()
    }

    var driverDetail = {
        driverId: $("#driverId").val(),
        users:user,
        driverName: $("#driverName").val(),
        driverAddress: $("#driverAddress").val(),
        driverAge: $("#driverAge").val(),
        driverContact: $("#driverContact").val(),
        releaseOrNot: $("#driverReleaseOrNot option:selected").text()
    }

    $.ajax({
        url: baseURLDriverControl+"driver",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(driverDetail),
        success: function (response) {
            if (response.code == 200) {
                alert($("#driverId").val() + " " + response.message);
            }
            clearDriverFields();
            loadAllDrivers();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function clearDriverAfterUpdate() {
    $('#driverReleaseOrNot').find('option:last').remove();
}


function clearDriverFields(){
    generateDriverIds();

    $("#driverUsername").val("");
    $("#driverName").val("");
    $("#driverContact").val("");
    $("#driverAge").val("");
    $("#driverAddress").val("");
    $("#driverPassword").val("");

    $("#driverUsername").css('border', '1px solid #e9ecef');
    $("#driverPassword").css('border', '1px solid #e9ecef');
    $("#driverName").css('border', '1px solid #e9ecef');
    $("#driverAddress").css('border', '1px solid #e9ecef');
    $("#driverAge").css('border', '1px solid #e9ecef');
    $("#driverContact").css('border', '1px solid #e9ecef');
}
