logStatus = "Not Logged";

    $('#logInCustomer').css('display', 'none');
    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#nav_bar").css('display', 'block');
    $("#banner").css('display', 'block');
    $("#services").css('display', 'block');
    $("#about_us").css('display', 'block');
    $("#featured-car").css('display', 'block');
    $("#testimonials").css('display', 'block');
    $("#Contact_Page").css('display', 'block');
    $("#social_media").css('display', 'block');
    $("#footer").css('display', 'block');


$('#CarManagePage').css('transform','scale(0)');
$('#DriverManagePage').css('transform','scale(0)');
$('#ChangeDriver').css('transform','scale(0)');
$('#PaymentAddPage').css('transform','scale(0)');


$("#btnOpenRegisterForm,#btnRegisterInLoginPage").click(function () {
    generateRegisterIds();
    generateUserIds();

    $("#nav_bar").css('display', 'block');
    $('#RegisterPage').css('display', 'block');

    $('#RegisterDriver').css('display', 'none');
    $('#logInCustomer').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});



$("#btnOpenCusLoginForm").click(function () {

    $('#logInCustomer').css('display', 'block');
    $("#nav_bar").css('display', 'block');

    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');


    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnOpenDriverLoginForm").click(function () {

    $("#nav_bar").css('display', 'block');
    $("#logInDriver").css('display', 'block');

    $('#logInCustomer').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');
    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');

    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnOpenAdminLoginForm").click(function () {
    $("#nav_bar").css('display', 'block');
    $("#logInAdmin").css('display', 'block');

    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $("#logInDriver").css('display', 'none');
    $('#logInCustomer').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#forgetPasswordBtn").click(function () {
    $('#ForgotPasswordPage').css('display', 'block');
    $("#nav_bar").css('display', 'block');

    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $('#logInCustomer').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnCancelToSystem,#btnCancelToDLogin,#btnCancelToAdmin,#btnCancelPW").click(function () {
    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $('#logInCustomer').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#nav_bar").css('display', 'block');
    $("#banner").css('display', 'block');
    $("#services").css('display', 'block');
    $("#about_us").css('display', 'block');
    $("#featured-car").css('display', 'block');
    $("#testimonials").css('display', 'block');
    $("#Contact_Page").css('display', 'block');
    $("#social_media").css('display', 'block');
    $("#footer").css('display', 'block');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnRegisterCancel").click(function () {
    registerToSystem();
});

function registerToSystem() {
    generateRegisterIds();
    generateUserIds();
    $('#logInCustomer').css('display', 'block');
    $("#nav_bar").css('display', 'block');


    $('#RegisterPage').css('display', 'none');
    $('#RegisterDriver').css('display', 'none');
    $('#logInDriver').css('display', 'none');
    $('#logInAdmin').css('display', 'none');
    $('#ForgotPasswordPage').css('display', 'none');
    $('#admin_screen').css('display', 'none');

    $("#banner").css('display', 'none');
    $("#services").css('display', 'none');
    $("#about_us").css('display', 'none');
    $("#featured-car").css('display', 'none');
    $("#testimonials").css('display', 'none');
    $("#Contact_Page").css('display', 'none');
    $("#social_media").css('display', 'none');
    $("#footer").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
}




/* -------------------------------- Default Admin Panel ---------------------------------*/
$('#admin_dashboard').css('display', 'block');
$("#car_dashboard").css('display', 'none');
$("#driver_dashboard").css('display', 'none');
$("#customer_dashboard").css('display', 'none');
$("#reservation_dashboard").css('display', 'none');
$("#payment_dashboard").css('display', 'none');
$("#income_dashboard").css('display', 'none');
$('#admin_profile').css('display', 'none');
$("#schedule_dashboard").css('display', 'none');



/*----------------------------------------------------------------------------------------*/
$("#btn_dashboard").click(function () {
    $('#admin_dashboard').css('display', 'block');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_profile").click(function () {
    $('#admin_profile').css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_car").click(function () {
    $("#car_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_driver").click(function () {
    $("#driver_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_customer").click(function () {
    $("#customer_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});
$("#btn_reservation").click(function () {
    $("#reservation_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_payment").click(function () {
    $("#payment_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btn_shedule").click(function () {
    $("#schedule_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btn_income").click(function () {
    $("#income_dashboard").css('display', 'block');
    $('#admin_dashboard').css('display', 'none');
    $("#car_dashboard").css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btnAddCar").click(function () {
    generateVehicleIds();
    clearFieldsFromCarPage()

    $('#CarManagePage').css('transform','scale(1)');
    $("#car_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btnCancelAddCar").click(function () {
    $('#CarManagePage').css('transform','scale(0)');
    $("#car_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnAddDriver").click(function () {

    $('#DriverManagePage').css('transform','scale(1)');

    $("#car_dashboard").css('display', 'block');

    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});

$("#btnCancelAddDriver").click(function () {

    $('#CarManagePage').css('transform','scale(0)');
    $("#driver_dashboard").css('display', 'block');

    $("#car_dashboard").css('display', 'none');
    $('#admin_dashboard').css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');

    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');

});

$("#btnChangeDriver").click(function () {

    $('#ChangeDriver').css('transform','scale(1)');
    $("#reservation_dashboard").css('display', 'block');

    $("#car_dashboard").css('display', 'none');
    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnCancelChangeDriver").click(function () {


    $("#reservation_dashboard").css('display', 'block');

    $("#driver_dashboard").css('display', 'npne');
    $("#car_dashboard").css('display', 'none');
    $('#admin_dashboard').css('display', 'none');
    $("#customer_dashboard").css('display', 'none');

    $("#payment_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#DriverManagePage').css('transform','scale(0)');
    $('#CarManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});


$("#btnAddPayment").click(function () {
    $('#PaymentAddPage').css('transform','scale(1)');
    $("#payment_dashboard").css('display', 'block');

    $("#reservation_dashboard").css('display', 'none')
    $("#car_dashboard").css('display', 'none');
    $('#admin_dashboard').css('display', 'none');
    $("#driver_dashboard").css('display', 'none');
    $("#customer_dashboard").css('display', 'none');

    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');

    $('#CarManagePage').css('transform','scale(0)');
    $('#DriverManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
});


$("#btnCancelAddPayment").click(function () {

    $("#payment_dashboard").css('display', 'block');

    $("#driver_dashboard").css('display', 'npne');
    $("#car_dashboard").css('display', 'none');
    $('#admin_dashboard').css('display', 'none');
    $("#customer_dashboard").css('display', 'none');
    $("#schedule_dashboard").css('display', 'none');
    $("#income_dashboard").css('display', 'none');
    $('#admin_profile').css('display', 'none');
    $("#reservation_dashboard").css('display', 'none');

    $('#DriverManagePage').css('transform','scale(0)');
    $('#CarManagePage').css('transform','scale(0)');
    $('#ChangeDriver').css('transform','scale(0)');
    $('#PaymentAddPage').css('transform','scale(0)');
});