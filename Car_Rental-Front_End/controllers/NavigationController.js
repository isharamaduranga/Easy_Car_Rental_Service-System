
$("#btnOpenRegisterForm").click(function () {
    openRegisterForm();
})



$("#btnOpenDriver_Sign_Form").click(function () {
    openDriverForm();
})



function openRegisterForm(){
/*    generateRegisterIds();
    generateUserIds();*/

    $('#RegisterPage').css('display','block');

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

$("#btnRegisterCancel").click(function () {
  registerCancelEvent();
});

$("#btnCancelDriver").click(function () {
  registerCancelEvent();
});


function registerCancelEvent() {
    $('#RegisterPage').css('display','none');
    $('#RegisterDriver').css('display','none');

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