var regExPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;

$("#newpassword").keyup(function (event) {
    let password = $("#newpassword").val();
    if (regExPassword.test(password)) {
        $("#newpassword").css('border', '2px solid #31d2f2');
        $("#errorNewPW").text("");
        if (event.key == "Enter") {
            $("#confirmpassword").focus();
        }
    } else {
        $("#newpassword").css('border', '2px solid red');
        $("#errorNewPW").text("Check this field whether correct !");
    }
});

$("#confirmpassword").keyup(function (event) {
    let password = $("#confirmpassword").val();
    if (regExPassword.test(password)) {
        $("#confirmpassword").css('border', '2px solid #31d2f2');
        $("#errorConfirmPW").text("");

    } else {
        $("#confirmpassword").css('border', '2px solid red');
        $("#errorConfirmPW").text("Check this field whether correct !");
    }
});

$("#btnResetPW").click(function () {
    if ($("#enterusername").val() == "" || $("#newpassword").val() == "" || $("#confirmpassword").val() == "" ){
        alert("All Fields Are Required !");
    }else {
        if ($("#errorNewPW").text() != "" || $("#errorConfirmPW").text() != "") {
            alert("Check Input Fields Whether Correct !");
        } else {
            if ($("#newpassword").val() == $("#confirmpassword").val()) {
                findUserId($("#enterusername").val());
            } else {
                alert("Invalid Password !");
            }
        }
    }
});

function findUserId( username) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/user/FIND/" +username,
        method: "GET",
        success: function (response) {
            if (response.data.username == $("#enterusername").val()) {
                resetNewPW(response.data.userId);
            }
        },
        error: function (ob) {
            alert("Wrong Username !");
        }
    });
}

function resetNewPW(userId) {
    var pwDetails = {
        userId: userId,
        username:$("#enterusername").val(),
        password: $("#confirmpassword").val()
    }

    $.ajax({
        url: "http://localhost:8080/Car_Rental_System_war/user",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(pwDetails),
        success: function (response) {
            if (response.code == 200) {
                alert("Successfully Reset Your Password !");
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}