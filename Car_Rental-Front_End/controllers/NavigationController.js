
log = "Not Logged";

$("#btnOpenRegisterForm,#btnRegisterInLoginPage").click(function () {
    openRegisterForm();
});

$("#btnOpenDriver_Sign_Form").click(function () {
    openDriverForm();
});

$("#btnOpenCusLoginForm").click(function () {
    openCusLoginForm();
});


$("#btnOpenDriverLoginForm").click(function () {
    openDriverLoginForm();
});


$("#btnOpenAdminLoginForm").click(function () {
    openAdminLoginForm();
});

function openAdminLoginForm() {
    $("#nav_bar").css('display','block');
    $("#logInAdmin").css('display','block');

    $("#logInDriver").css('display','none');
    $('#RegisterPage').css('display','none');
    $('#logInCustomer').css('display','none');
    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}


function openDriverLoginForm() {

    $("#nav_bar").css('display','block');
    $("#logInDriver").css('display','block');

    $('#RegisterPage').css('display','none');
    $('#logInCustomer').css('display','none');
    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}



function openCusLoginForm() {

    $('#logInCustomer').css('display','block');
    $("#nav_bar").css('display','block');

    $('#RegisterPage').css('display','none');

    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}


function openRegisterForm(){
    generateRegisterIds();
    generateUserIds();

    $('#RegisterPage').css('display','block');

    $('#logInCustomer').css('display','none');

    $("#nav_bar").css('display','block');
    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}

$("#btnCancelToSystem,#btnCancelToDLogin,#btnCancelToAdmin,#btnCancelPW").click(function () {
  registerCancelEvent();
});



$("#btnRegisterCancel").click(function () {
    registerToSystem();
});

$("#btnCancelDriver").click(function () {
  registerCancelEvent();
});
$("#btnCancelToAdmin").click(function () {
  registerCancelEvent();
});

function registerToSystem() {
    generateRegisterIds();
    generateUserIds();
    $('#logInCustomer').css('display','block');
    $("#nav_bar").css('display','block');
    $("#banner").css('display','none');

    $('#RegisterPage').css('display','none');
    $('#RegisterDriver').css('display','none');
    $('#logInDriver').css('display','none');
    $('#logInAdmin').css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}


function registerCancelEvent() {

    $('#RegisterPage').css('display','none');
    $('#RegisterDriver').css('display','none');
    $('#logInCustomer').css('display','none');
    $('#logInDriver').css('display','none');
    $('#logInAdmin').css('display','none');
    $('#ForgotPasswordPage').css('display','none');

    $("#nav_bar").css('display','block');
    $("#banner").css('display','block');
    $("#services").css('display','block');
    $("#about_us").css('display','block');
    $("#featured-car").css('display','block');
    $("#testimonials").css('display','block');
    $("#Contact_Page").css('display','block');
    $("#social_media").css('display','block');
    $("#footer").css('display','block');
}

function openDriverForm() {

    $('#RegisterDriver').css('display','block');

    $('#RegisterPage').css('display','none');
    $("#nav_bar").css('display','block');
    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
}

$("#fwBtn").click(function () {
    $('#ForgotPasswordPage').css('display','block');
    $("#nav_bar").css('display','block');
    $('#RegisterPage').css('display','none');
    $('#RegisterDriver').css('display','none');
    $('#logInCustomer').css('display','none');
    $('#logInDriver').css('display','none');
    $('#logInAdmin').css('display','none');

    $("#banner").css('display','none');
    $("#services").css('display','none');
    $("#about_us").css('display','none');
    $("#featured-car").css('display','none');
    $("#testimonials").css('display','none');
    $("#Contact_Page").css('display','none');
    $("#social_media").css('display','none');
    $("#footer").css('display','none');
})