const adminIdRegEx = /^(ADM-)[0-9]{1,3}$/;
const adminNameRegEx = /^[A-z ]{5,20}$/;
var adminPwdRegEx = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;
var adminContactRegEx = /^(071|077|075|078|)[0-9]{7}$/;

/* Defined Validation Array */
let adminValidationArray = [];

adminValidationArray.push({
    reg: adminIdRegEx,
    field: $('#adminId'),
    error: 'Admin ID Pattern is Wrong Format: C00-001'
});
adminValidationArray.push({
    reg: adminNameRegEx,
    field: $('#adminName'),
    error: 'Admin Name Pattern is Wrong Format: A-z 5-20'
});
adminValidationArray.push({
    reg: adminPwdRegEx,
    field: $('#adminPassword'),
    error: 'Admin Password Pattern is Wrong Format'
});
adminValidationArray.push({
    reg: adminContactRegEx,
    field: $('#adminContact'),
    error: 'Admin Contact Pattern is Wrong Format'
});


/** Text Fields Key down to Tab & prevent Default function.. */
$("#adminId,#adminName,#adminPassword,#adminContact").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

/** Text Fields Key Up to Check validation function.. */
$("#adminId,#adminName,#adminPassword,#adminContact").on('keyup', function (event) {
    checkAdminValidation();

});

/** Text Fields blur to Check validation function.. */
$("#adminId,#adminName,#adminPassword,#adminContact").on('blur', function (event) {
    checkAdminValidation();

});

/** Text Fields Key down to focus and validate functionalities... */
$("#adminId").on('keydown', function (event) {

    if (event.key == "Enter" && check(adminIdRegEx, $("#adminId"))) {
        $("#adminName").focus();
    } else {
        $("#adminId").focus();
    }
});

$("#adminName").on('keydown', function (event) {
    if (event.key == "Enter" && check(adminNameRegEx, $("#adminName"))) {
        $("#adminPassword").focus();
    }
});

$("#adminPassword").on('keydown', function (event) {
    if (event.key == "Enter" && check(adminPwdRegEx, $("#adminPassword"))) {
        $("#adminContact").focus();
    }
});

$("#adminContact").on('keydown', function (event) {
    if (event.key == "Enter" && check(adminContactRegEx, $('#adminContact'))) {

        let option = confirm("Do you  Want To Save Admin ?");

        if (option) {
            saveAdmins();
        }

        $("#adminId").focus();
    }
});

/** function of CheckAdmin Validation Event  */
function checkAdminValidation() {
    let errorCount = 0;
    for (let validate of adminValidationArray) {
        if (check(validate.reg, validate.field)) {
            // to write success event
            successEvent(validate.field, "");


        } else {
            /* Increase error count when find a error*/
            errorCount = errorCount + 1;
            // to write error event
            errorEvent(validate.field, validate.error)
        }
    }
    setButtonState(errorCount);
}

/** function of Check Event  */
function check(regPattern, textField) {
    if (regPattern.test(textField.val())) {
        return true;
    } else {
        return false;
    }
}

/** function of Success Event  */
function successEvent(textField, massage) {
    if (textField.val().length <= 0) {
        //calling default text function...
        defaultText(textField, "");
    } else {
        textField.css("border", "2px solid #049104FF");
        textField.parent().children('span').text(massage);
    }
}
/** function of Error Event  */
function errorEvent(textField, error) {
    if (textField.val().length <= 0) {
        //calling default text function...
        defaultText(textField, "");
    } else {
        textField.css('border', '2px solid red');
        textField.parent().children('span').text(error);
    }
}
/** function of Default text */
function defaultText(txtField, massage) {
    txtField.css("border", "2px solid #ced4da");
    txtField.parent().children('span').text(massage);
}

/** function of Button State */
function setButtonState(count) {
    if (count > 0) {
        $("#addBtn").attr('disabled', true);
    } else {
        $("#addBtn").attr('disabled', false);
    }
}

/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Events() {
    $('#adminTable>tr').click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let password = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        /** setting table details values to text fields */
        $('#adminId').val(id);
        $('#adminName').val(name);
        $('#adminPassword').val(password);
        $('#adminContact').val(contact);
    });
}
$("#clearBtn").click(function () {
    clearTextFields()
});

function clearTextFields() {
    $('#adminId').val("");
    $('#adminName').val("");
    $('#adminPassword').val("");
    $('#adminContact').val("");
}


let baseURL ="http://localhost:8080/Car_Rental_Back_End_war/"

loadAllAdmins();

// Function of Save admin
function saveAdmins() {
    let formdata = $("#adminForm").serialize();

    $.ajax({
        url: baseURL + "admin",
        method: "post",
        dataType: "json",
        data: formdata,

        success: function (resp) {
            alert(resp.message);
            loadAllAdmins()
        },
        error: function (error) {
            let jSObj = JSON.parse(error.responseText);
            alert(jSObj.message);
        }

    });
}

$("#addBtn").click(function () {
    saveAdmins();
});

$("#getAllBtn").click(function () {

    loadAllAdmins();
    clearTextFields();
});

function loadAllAdmins() {

    $("#adminTable").empty();
    $.ajax({
        url: baseURL + "admin",
        dataType: "json",

        success: function (resp) {
            for (let ad of resp.data) {
                $("#adminTable").append("<tr><td>" + ad.id + "</td> <td>" + ad.name + "</td> <td>" + ad.password + "</td> <td>" + ad.contact + "</td></tr>");
            }
            setData_Bind_Row_Events();
            clearTextFields()
            $("#adminId").focus();

        }
    });
}


$("#deleteBtn").click(function () {
    let admId = $("#adminId").val();
    $.ajax({
        url: baseURL + "admin?id=" + admId,
        method: "delete",
        dataType: "json",
        success: function (resp) {
            alert(resp.message);
            loadAllAdmins();
        },
        error: function (error) {
            let jsObj = JSON.parse(error.responseText);
            alert(jsObj.message);
        }
    });
});

$("#updateBtn").click(function () {
    let AdmId = $('#adminId').val();
    let AdmName = $('#adminName').val();
    let AdmPassword = $('#adminPassword').val();
    let AdmContact = $('#adminContact').val();

    var admin = {
        id: AdmId,
        name: AdmName,
        address: AdmPassword,
        salary: AdmContact
    }

    $.ajax({
        url: baseURL + "admin",
        method: "put",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(admin),
        success: function (resp) {
            alert(resp.message);
            loadAllAdmins();
        },
        error: function (error) {
            let jsObj = JSON.parse(error.responseText);
            alert(jsObj.message);
        }
    });
});

