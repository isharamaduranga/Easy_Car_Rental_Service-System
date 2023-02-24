
/** Back end Request URL */
let baseURLRegister ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var regExFullName = /^[A-Z|a-z\s]{3,20}$/;
var regExContact = /^(071|077|075|078|076)[0-9]{7}$/;
var regExAddress = /^[0-9A-Z a-z,/:]{4,50}$/;
var regExEmail = /^[0-9A-Z a-z$&#]{3,10}(@gmail.com)|(@yahoo.com)$/;
var regExNIC = /^[0-9]{9}(v)$/;
var regExDrivingLNO = /^[1-9]{1,10}$/;


$("#username").keyup(function (event) {
    let username = $("#username").val();
    if (regExUserName.test(username)) {
        $("#username").css('border', '2px solid #31d2f2');
        $("#errorUsername").text("");
        if (event.key == "Enter") {
            $("#password").focus();
        }
    } else {
        $("#username").css('border', '2px solid red');
        $("#errorUsername").text("Check field is correct !");
    }
});

$("#password").keyup(function (event) {
    let password = $("#password").val();
    if (regExPassword.test(password)) {
        $("#password").css('border', '2px solid #31d2f2');
        $("#errorPassword").text("");
        if (event.key == "Enter") {
            $("#customername").focus();
        }
    } else {
        $("#password").css('border', '2px solid red');
        $("#errorPassword").text("Check field is correct !");
    }
});

$("#customername").keyup(function (event) {
    let name = $("#customername").val();
    if (regExFullName.test(name)) {
        $("#customername").css('border', '2px solid #31d2f2');
        $("#errorFullName").text("");
        if (event.key == "Enter") {
            $("#contactnumber").focus();
        }
    } else {
        $("#customername").css('border', '2px solid red');
        $("#errorFullName").text("Check field is correct !");
    }
});

$("#contactnumber").keyup(function (event) {
    let contact = $("#contactnumber").val();
    if (regExContact.test(contact)) {
        $("#contactnumber").css('border', '2px solid #31d2f2');
        $("#errorContact").text("");
        if (event.key == "Enter") {
            $("#customeraddress").focus();
        }
    } else {
        $("#contactnumber").css('border', '2px solid red');
        $("#errorContact").text("Check field is correct !");
    }
});

$("#customeraddress").keyup(function (event) {
    let address = $("#customeraddress").val();
    if (regExAddress.test(address)) {
        $("#customeraddress").css('border', '2px solid #31d2f2');
        $("#errorAddress").text("");
        if (event.key == "Enter") {
            $("#email").focus();
        }
    } else {
        $("#customeraddress").css('border', '2px solid red');
        $("#errorAddress").text("Check this field whether correct !");
    }
});

$("#email").keyup(function (event) {
    let email = $("#email").val();
    if (regExEmail.test(email)) {
        $("#email").css('border', '2px solid #31d2f2');
        $("#errorEmail").text("");
        if (event.key == "Enter") {
            $("#nic").focus();
        }
    } else {
        $("#email").css('border', '2px solid red');
        $("#errorEmail").text("");
    }
});

$("#nic").keyup(function (event) {
    let nic = $("#nic").val();
    if (regExNIC.test(nic)) {
        $("#nic").css('border', '2px solid #31d2f2');
        $("#errorNIC").text("");
        if (event.key == "Enter") {
            $("#drivinglicense").focus();
        }
    } else {
        $("#nic").css('border', '2px solid red');
        $("#errorNIC").text("Check field is correct !");
    }
});

$("#drivinglicense").keyup(function (event) {
    let dl = $("#drivinglicense").val();
    if (regExDrivingLNO.test(dl)) {
        $("#drivinglicense").css('border', '2px solid #31d2f2');
        $("#errorDrivingLicense").text("");
        $('#btnRegister').prop('disabled', false);
    } else {
        $("#drivinglicense").css('border', '2px solid red');
        $("#errorDrivingLicense").text("Check field is correct !");
    }
});


/*---------------date--------------*/
var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

/*-----------generate register id--------------*/

function generateRegisterIds() {
    $("#generateCusId").text("C00-0001");
    var test = "id";

    $.ajax({

        url: baseURLRegister+"customer?test="+test,
        method: "GET",
        success: function (response) {
            var customerId = response.data;
            var tempId = parseInt(customerId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#generateCusId").text("C00-000" + tempId);
            } else if (tempId <= 99) {
                $("#generateCusId").text("C00-00" + tempId);
            } else if (tempId <= 999) {
                $("#generateCusId").text("C00-0" + tempId);
            } else {
                $("#generateCusId").text("C00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }
    });
}

function generateUserIds() {
    $("#generateUserId").text("U00-0001");
    var test = "id";

    $.ajax({
        url: baseURLRegister+"user?test="+test,
        method: "GET",
        success: function (response) {
            var userId = response.data;
            var tempId = parseInt(userId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#generateUserId").text("U00-000" + tempId);
            } else if (tempId <= 99) {
                $("#generateUserId").text("U00-00" + tempId);
            } else if (tempId <= 999) {
                $("#generateUserId").text("U00-0" + tempId);
            } else {
                $("#generateUserId").text("U00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }
    });
}

$("#btnRegister").click(function () {
    $("#tblCustomers tbody > tr").off("click");

    if ($("#username").val() == "" || $("#password").val() == "" || $("#customername").val() == "" || $("#customeraddress").val() == "" ||
        $("#contactnumber").val() == "" || $("#email").val() == "" || $("#nic").val() == "" || $("#drivinglicense").val() == "" ){
        alert("All Fields Are Required !");
    }else {
            if ($('#uploadmyimage').get(0).files.length === 0 || $('#uploadnicimage').get(0).files.length === 0 || $('#uploaddrivinglicence').get(0).files.length === 0) {
                alert("No Images Inserted !");
            }else {
                if ($("#errorUsername").text() != "" || $("#errorPassword").text() != "" || $("#errorFullName").text() != "" || $("#errorContact").text() != "" ||
                    $("#errorAddress").text() != "" || $("#errorEmail").text() != "" || $("#errorDrivingLicense").text() != ""){
                    alert("Check Input Fields Whether Correct !");
                }else {
                    $('#btnRegister').prop('disabled', false);
                    register();
                }
            }

    }
});


function register() {
    var user={
        userId:$("#generateUserId").text(),
        username:$("#username").val(),
        password: $("#password").val()
    }

    var cusDetail = {
        customerId: $("#generateCusId").text(),
        users:user,
        registeredDate: today.toString(),
        customerName: $("#customername").val(),
        customerAddress: $("#customeraddress").val(),
        customerContact: $("#contactnumber").val(),
        customerEmail: $("#email").val(),
        customerNicNo: $("#nic").val(),
        customerDrivingLicenseNo: $("#drivinglicense").val(),
        NICImage: null,
        DrivingLicenseImage: null
    }

    $.ajax({
        url: baseURLRegister+"customer",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(cusDetail),
        success: function (response) {
            if (response.code == 200){
                registerUser(user);
                alert($("#customername").val() + " "+ response.message);
                registerToSystem();
                generateRegisterIds();
                generateUserIds();
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function registerUser(users) {
    var user={
        userId:users.userId,
        username:users.username,
        password: users.password
    }

    $.ajax({
        url: baseURLRegister+"user",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function (response) {
            console.log(response);
            if (response.code == 200){
                clearRegisterFields();
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

}

function loadAllCustomer() {

    $.ajax({
        url: baseURLRegister+"customer",
        method: "GET",
        success: function (response) {

            $("#tblCustomers tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.registeredDate} </td><td> ${responseKey.customerId} </td><td>
                                <div class="d-flex align-items-center">
                                <img src="https://images.pexels.com/photos/2646119/pexels-photo-2646119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                                </div>  
                                </td><td> ${responseKey.customerName} </td><td> ${responseKey.customerAddress} </td><td> ${responseKey.customerContact} </td><td> ${responseKey.customerNicNo} </td><td> ${responseKey.customerDrivingLicenseNo} </td><td><div class="d-flex align-items-center">
                                <img src="https://images.pexels.com/photos/2646119/pexels-photo-2646119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                                </div>   
                                </td><td> <div class="d-flex align-items-center">
                                <img src="https://images.pexels.com/photos/2646119/pexels-photo-2646119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                                </div>   
                                </td></tr>`;
                $("#tblCustomers tbody").append(raw);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

}

function clearRegisterFields() {
    generateRegisterIds();

    $("#customername").val("");
    $("#customeraddress").val("");
    $("#contactnumber").val("");
    $("#email").val("");
    $("#nic").val("");
    $("#drivinglicense").val("");
    $("#username").val("");
    $("#password").val("");

    $('#uploadnicimage').clear();
    $('#uploaddrivinglicence').clear();
    $('#uploadmyimage').clear();

    $("#customername").css('border', '2px solid transparent');
    $("#customeraddress").css('border', '2px solid transparent');
    $("#contactnumber").css('border', '2px solid transparent');
    $("#email").css('border', '2px solid transparent');
    $("#nic").css('border', '2px solid transparent');
    $("#drivinglicense").css('border', '2px solid transparent');
    $("#email").css('border', '2px solid transparent');
    $("#username").css('border', '2px solid transparent');
    $("#password").css('border', '2px solid transparent');
}
