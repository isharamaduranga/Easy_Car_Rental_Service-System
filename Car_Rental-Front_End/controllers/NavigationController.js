
$("#btnOpenRegisterForm").click(function () {
    openRegisterForm();
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
