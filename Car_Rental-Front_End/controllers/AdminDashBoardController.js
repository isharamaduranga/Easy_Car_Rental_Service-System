
/** Back end Request URL */
let baseURLAdminPanel ="http://localhost:8080/Car_Rental_Back_End_war/"


function loadAllAdminPanelData() {
    totalRegisterUsers();
}

function totalRegisterUsers() {
    $.ajax({
        url: baseURLAdminPanel+"customer/COUNT/" + "count",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#totalRegUsers").text(0);
            }else {
                $("#totalRegUsers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

