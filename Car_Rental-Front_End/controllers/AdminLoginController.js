
/** Back end Request URL */
let baseURLAdminLogin ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;

$("#loginAdminname").keyup(function (event) {
    let username = $("#loginAdminname").val();
    if (regExLoginUserName.test(username)) {

        if (event.key == "Enter") {
            $("#loginAdminpassword").focus();
        }
    } else {

    }
});

$("#loginAdminpassword").keyup(function (event) {
    let password = $("#loginAdminpassword").val();
    if (regExLoginPassword.test(password)) {
        $("#loginAdminpassword").css('border', '2px solid #31d2f2');

    } else {

    }
});

$("#btnLogToAdminPanel").click(function () {

    if ($("#loginAdminname").val() == "" || $("#loginAdminpassword").val() == ""){
        alert("All Fields Are Required To Log !");
    }else {
        isExistsAdmin($("#loginAdminname").val(),$("#loginAdminpassword").val());
    }
 /*   /!** Temporary Admin login logic (Nota Database Information)*!/
    let nameAdmin = $("#loginAdminname").val();
    let pwdAdmin = $("#loginAdminpassword").val();

    if ("" === nameAdmin && "" === pwdAdmin) {


        // Login Admin panel

      /!*  $("#admin_screen").css('display','block');
        $("#logInAdmin").css('display', 'none');
        loadAllAdminPanelData();*!/




    }else{

    }*/

});


function isExistsAdmin(name, password) {
    $.ajax({
        url: baseURLAdminLogin+"admin/" + password +"/"+name,
        method: "GET",
        success: function (response) {
            if (response.data.name == $("#loginAdminname").val() && response.data.password == $("#loginAdminpassword").val()) {

                // Login Admin panel
                alert("success to login admin panel..")
                $("#admin_screen").css('display','block');
                $("#logInAdmin").css('display', 'none');
                loadAllAdminPanelData();

            }
        },
        error: function (ob) {
            alert("Wrong Username And Password !");
        }
    });
}

