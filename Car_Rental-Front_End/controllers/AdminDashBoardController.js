/** Back end Request URL */
let baseURLAdminPanel = "http://localhost:8080/Car_Rental_Back_End_war/"

var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);

function loadAllAdminPanelData() {
    AvailableCars();
    ReservedCars();
    AllReservation();
    totalNewUsers();
    totalRegisterUsers();
    TodayAllReservations();
    TodayActiveBookings();
}



function totalNewUsers() {
    $.ajax({
        url: baseURLAdminPanel + "customer/NewUsers/" + today,
        method: "GET",
        success: function (response) {
            if (response.data == "") {
                $("#totalNewUsers").text(0);
            } else {
                $("#totalNewUsers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function totalRegisterUsers() {
    $.ajax({
        url: baseURLAdminPanel + "customer/COUNT/" + "count",
        method: "GET",
        success: function (response) {
            if (response.data == "") {
                $("#totalRegUsers").text(0);
            } else {
                $("#totalRegUsers").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}
function TodayAllReservations() {
    $.ajax({
        url: baseURLAdminPanel+"reserve/DailyReservation/" + today,
        method: "GET",
        success: function (response) {
            if (response.data == "") {
                $("#todayReservations").text(0);
            } else {
                $("#todayReservations").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function TodayActiveBookings() {
    $.ajax({
        url: baseURLAdminPanel+"reserve/" + today+ "/"+"Accept",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#todayActiveBookings").text(0);
            }else {
                $("#todayActiveBookings").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function AllReservation() {
    $.ajax({
        url: baseURLAdminPanel+"reserve/ReservationCount/" + "countAll",
        method: "GET",
        success: function (response) {
            if (response.data == ""){
                $("#allReservation").text(0);
            }else {
                $("#allReservation").text(response.data);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}







