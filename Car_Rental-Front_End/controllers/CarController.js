/** Back end Request URL */
let baseURL ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExRegisterNO = /^(R00-)[0-9]{4}$/;
var regPassengers = /^[1-9]{1,2}$/;
var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regExKm = /^[1-9]{1,5}$/;
var regExDistance = /^[0-9]{1,5}$/;

$("#registrationNo").keyup(function (event) {
    let regNo = $("#registrationNo").val();
    if (regExRegisterNO.test(regNo)) {
        $("#registrationNo").css('border', '2px solid #31d2f2');
        $("#errorRegNo").text("");
        if (event.key == "Enter") {
            $("#noOfPassengers").focus();
        }
    } else {
        $("#registrationNo").css('border', '2px solid red');
        $("#errorRegNo").text("Check this field whether correct !");
    }
});

$("#noOfPassengers").keyup(function (event) {
    let passengers = $("#noOfPassengers").val();
    if (regPassengers.test(passengers)) {
        $("#noOfPassengers").css('border', '2px solid #31d2f2');
        $("#errorPassengers").text("");
        if (event.key == "Enter") {
            $("#dailyRatePrice").focus();
        }
    } else {
        $("#noOfPassengers").css('border', '2px solid red');
        $("#errorPassengers").text("Check this field whether correct !");
    }
});

$("#dailyRatePrice").keyup(function (event) {
    let dailyRate = $("#dailyRatePrice").val();
    if (regExPrice.test(dailyRate)) {
        $("#dailyRatePrice").css('border', '2px solid #31d2f2');
        $("#errorDailyRate").text("");
        if (event.key == "Enter") {
            $("#monthlyRatePrice").focus();
        }
    } else {
        $("#dailyRatePrice").css('border', '2px solid red');
        $("#errorDailyRate").text("Check this field whether correct !");
    }
});

$("#monthlyRatePrice").keyup(function (event) {
    let monthlyRate = $("#monthlyRatePrice").val();
    if (regExPrice.test(monthlyRate)) {
        $("#monthlyRatePrice").css('border', '2px solid #31d2f2');
        $("#errorMonthlyRate").text("");
        if (event.key == "Enter") {
            $("#freeKMPerDay").focus();
        }
    } else {
        $("#monthlyRatePrice").css('border', '2px solid red');
        $("#errorMonthlyRate").text("Check this field whether correct !");
    }
});

$("#freeKMPerDay").keyup(function (event) {
    let freekm = $("#freeKMPerDay").val();
    if (regExKm.test(freekm)) {
        $("#freeKMPerDay").css('border', '2px solid #31d2f2');
        $("#errorFeeKMDay").text("");
        if (event.key == "Enter") {
            $("#freeKMPerMonth").focus();
        }
    } else {
        $("#freeKMPerDay").css('border', '2px solid red');
        $("#errorFeeKMDay").text("Check this field whether correct !");
    }
});

$("#freeKMPerMonth").keyup(function (event) {
    let freeKMMonth = $("#freeKMPerMonth").val();
    if (regExKm.test(freeKMMonth)) {
        $("#freeKMPerMonth").css('border', '2px solid #31d2f2');
        $("#errorFreeKMMonth").text("");
        if (event.key == "Enter") {
            $("#priceForExtraKM").focus();
        }
    } else {
        $("#freeKMPerMonth").css('border', '2px solid red');
        $("#errorFreeKMMonth").text("Check this field whether correct !");
    }
});

$("#priceForExtraKM").keyup(function (event) {
    let priceExtraKm = $("#priceForExtraKM").val();
    if (regExPrice.test(priceExtraKm)) {
        $("#priceForExtraKM").css('border', '2px solid #31d2f2');
        $("#errorExtraKMPrice").text("");
        if (event.key == "Enter") {
            $("#totalDistanceTravelled").focus();
        }
    } else {
        $("#priceForExtraKM").css('border', '2px solid red');
        $("#errorExtraKMPrice").text("Check this field whether correct !");
    }
});

$("#totalDistanceTravelled").keyup(function (event) {
    let totalDistance = $("#totalDistanceTravelled").val();
    if (regExDistance.test(totalDistance)) {
        $("#totalDistanceTravelled").css('border', '2px solid #31d2f2');
        $("#errorTotalDistance").text("");

    } else {
        $("#totalDistanceTravelled").css('border', '2px solid red');
        $("#errorTotalDistance").text("Check this field whether correct !");
    }
});

function generateVehicleIds() {
    $("#carId").val("V00-0001");
    var test = "id";

    $.ajax({
        url: baseURL+"car?test="+test,
        method: "GET",
        success: function (response) {
            var carId = response.data;
            var tempId = parseInt(carId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#carId").val("V00-000" + tempId);
            } else if (tempId <= 99) {
                $("#carId").val("V00-00" + tempId);
            } else if (tempId <= 999) {
                $("#carId").val("V00-0" + tempId);
            } else {
                $("#carId").val("V00-" + tempId);
            }
        },
        error: function (ob, statusText, error) {
        }
    });
}



$("#btnAddNewCar").click(function () {
    $("#tblCars tbody > tr").off("click");

    let text = "Do you want to Add this car ?";

    if (confirm(text) == true) {
        if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
            $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
            $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
            $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
            $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" ||  $("#availableOrNot option:selected").val() == ""){
            alert("All Fields Are Required !");
        }else {
            if ($("#errorRegNo").text() != "" || $("#errorPassengers").text() != "" || $("#errorDailyRate").text() != "" || $("#errorMonthlyRate").text() != "" ||
                $("#errorFeeKMDay").text() != "" || $("#errorFreeKMMonth").text() != "" || $("#errorExtraKMPrice").text() != "" || $("#errorTotalDistance").text() != ""){
                alert("Check Input Fields Whether Correct !");
            }else {
                if ($('#uploadFrontView').get(0).files.length === 0 || $('#uploadBackView').get(0).files.length === 0 || $('#uploadSideView').get(0).files.length === 0 || $('#uploadInteriorView').get(0).files.length === 0) {
                    alert("No Images Inserted !");
                }else {
                    isExistsRegistrationNumber();
                }
            }
        }
    }else {}
});

function isExistsRegistrationNumber() {
    $.ajax({
        url: baseURL+"car/SEARCH/" + $("#registrationNo").val(),
        method: "GET",
        success: function (response) {
            if (response.data == $("#registrationNo").val()){
                alert("Duplicate Registration Number . Please Check !");
            }else {
                saveNewCar();
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function saveNewCar(){

}