/** Back end Request URL */
let baseURLCarControle ="http://localhost:8080/Car_Rental_Back_End_war/"

var regExRegisterNO = /^(R00-)[0-9]{4}$/;
var regPassengers = /^[1-9]{1,2}$/;
var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regFKmDay = /^[1-9]{1,5}$/;
var regFKmMonth = /^[1-9]{1,6}$/;
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
    if (regFKmDay.test(freekm)) {
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
    if (regFKmMonth.test(freeKMMonth)) {
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
        url: baseURLCarControle+"car?test="+test,
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
        url: baseURLCarControle+"car/SEARCH/" + $("#registrationNo").val(),
        method: "GET",
        success: function (response) {
            if (response.data == $("#registrationNo").val()){
                alert("Duplicate Registration Number . Please Check !");
            }else {
                saveNewCar();
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

function clearFieldsFromCarPage() {
    generateVehicleIds();

    $("#registrationNo").val("");
    $("#noOfPassengers").val("");
    $("#freeKMPerDay").val("");
    $("#freeKMPerMonth").val("");
    $("#priceForExtraKM").val("");
    $("#dailyRatePrice").val("");
    $("#monthlyRatePrice").val("");
    $("#totalDistanceTravelled").val("");

    $("#registrationNo").css('border', '1px solid #e9ecef');
    $("#noOfPassengers").css('border', '1px solid #e9ecef');
    $("#freeKMPerDay").css('border', '1px solid #e9ecef');
    $("#freeKMPerMonth").css('border', '1px solid #e9ecef');
    $("#priceForExtraKM").css('border', '1px solid #e9ecef');
    $("#dailyRatePrice").css('border', '1px solid #e9ecef');
    $("#monthlyRatePrice").css('border', '1px solid #e9ecef');
    $("#totalDistanceTravelled").css('border', '1px solid #e9ecef');
}

function saveNewCar(){
    var newCarData = {
        carId: $("#carId").val(),
        registrationNo:$("#registrationNo").val(),
        colour: $("#colour option:selected").text(),
        brand: $("#brand option:selected").text(),
        type: $("#type option:selected").text(),
        fuelType: $("#fuelType option:selected").text(),
        transmissionType: $("#transmissionType option:selected").text(),
        noOfPassengers: $("#noOfPassengers").val(),
        freeKmForDay: $("#freeKMPerDay").val(),
        freeKmForMonth: $("#freeKMPerMonth").val(),
        pricePerExtraKM: $("#priceForExtraKM").val(),
        dailyRatePrice: $("#dailyRatePrice").val(),
        monthlyRatePrice: $("#monthlyRatePrice").val(),
        totalDistanceTraveled: $("#totalDistanceTravelled").val(),
        availableOrNot:$("#availableOrNot option:selected").text(),
        damageOrNot: $("#damageOrNot option:selected").text(),
        underMaintainOrNot: $("#underMaintainOrNot option:selected").text(),
        fontViewImage: null,
        backViewImage: null,
        sideViewImage: null,
        interiorViewImage: null
    }

    $.ajax({
        url: baseURLCarControle+"car",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newCarData),
        success: function (response) {
            if (response.code == 200){
                alert($("#carId").val() + " "+ response.message);
                clearFieldsFromCarPage();
                loadAllCars();
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}



function loadAllCars(){
    $.ajax({
        url: baseURLCarControle+"car",
        method: "GET",
        success: function (response) {

            $("#tblCars tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.carId} </td><td> 
                            ${responseKey.brand} </td><td> 
                            ${responseKey.colour} </td><td> 
                            ${responseKey.type} </td><td> 
                            ${responseKey.registrationNo} </td><td> 
                            ${responseKey.fuelType} </td><td> 
                            ${responseKey.transmissionType} </td><td> 
                            ${responseKey.noOfPassengers} </td><td> 
                            ${responseKey.dailyRatePrice} </td><td> 
                            ${responseKey.monthlyRatePrice} </td><td> 
                            ${responseKey.freeKmForDay} </td><td> 
                            ${responseKey.freeKmForMonth} </td><td> 
                            ${responseKey.pricePerExtraKM} </td><td>
                            <span class="badge badge-success rounded-pill d-inline">${responseKey.availableOrNot}</span></td><td> 
                            <span class="badge badge-success rounded-pill d-inline">${responseKey.damageOrNot}</span></td><td> 
                            <span class="badge badge-success rounded-pill d-inline">${responseKey.underMaintainOrNot}</span> </td><td> 
                            ${responseKey.totalDistanceTraveled} </td><td>
                            <div class="d-flex align-items-center">
                                <img src="../assets/images/panel2.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="../assets/images/panel1.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="../assets/images/panel3.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td><td>
                             <div class="d-flex align-items-center">
                                <img src="../assets/images/panel4.jpg" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                             </div></td> 
                             <td><button type="button" id="btnEditCar"  class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                <i class="fas fa-pen-alt"></i>
                              </button></td></tr>`;
                $("#tblCars tbody").append(raw);
            }

            generateVehicleIds();
            BindRowClickEvent();
            clearFieldsFromCarPage();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

var tblClickRow = -1;
function BindRowClickEvent() {

    $("#tblCars tbody > tr").click(function () {

        tblClickRow = $(this);

        let msg = "Do you want to Edit cars ?";
        if (confirm(msg) == true) {
            $('#CarManagePage').css('transform','scale(1)');

            var carId = $.trim(tblClickRow.children(':nth-child(1)').text());
            var regNo = $.trim(tblClickRow.children(':nth-child(5)').text());
            var passengers = $.trim(tblClickRow.children(':nth-child(8)').text());
            var dailyRate = $.trim(tblClickRow.children(':nth-child(9)').text());
            var monthlyRate = $.trim(tblClickRow.children(':nth-child(10)').text());
            var freeKMDay = $.trim(tblClickRow.children(':nth-child(11)').text());
            var freeKmMonth = $.trim(tblClickRow.children(':nth-child(12)').text());
            var extraKm = $.trim(tblClickRow.children(':nth-child(13)').text());
            var totalDistance = $.trim(tblClickRow.children(':nth-child(17)').text());
            var frontView = $.trim(tblClickRow.children(':nth-child(18)').text());
            var backView = $.trim(tblClickRow.children(':nth-child(19)').text());
            var sideView = $.trim(tblClickRow.children(':nth-child(20)').text());
            var interiorView = $.trim(tblClickRow.children(':nth-child(21)').text());

            $("#brand").append($("<option selected></option>").attr("value", 14).text($.trim(tblClickRow.children(':nth-child(2)').text())));
            $("#colour").append($("<option selected></option>").attr("value", 11).text($.trim(tblClickRow.children(':nth-child(3)').text())));
            $("#type").append($("<option selected></option>").attr("value", 4).text($.trim(tblClickRow.children(':nth-child(4)').text())));
            $("#transmissionType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(7)').text())));
            $("#fuelType").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(6)').text())));
            $("#availableOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(14)').text())));
            $("#damageOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(15)').text())));
            $("#underMaintainOrNot").append($("<option selected></option>").attr("value", 3).text($.trim(tblClickRow.children(':nth-child(16)').text())));

            $("#carId").val(carId);
            $("#registrationNo").val(regNo);
            $("#noOfPassengers").val(passengers);
            $("#dailyRatePrice").val(dailyRate);
            $("#monthlyRatePrice").val(monthlyRate);
            $("#freeKMPerDay").val(freeKMDay);
            $("#freeKMPerMonth").val(freeKmMonth);
            $("#priceForExtraKM").val(extraKm);
            $("#totalDistanceTravelled").val(totalDistance);
            $("#transmissionType option:selected").val($.trim(tblClickRow.children(':nth-child(7)').text()));

        } else {}

    });
}

function updateCar() {
    var carDetails = {
        carId: $("#carId").val(),
        registrationNo:$("#registrationNo").val(),
        colour: $("#colour option:selected").text(),
        brand: $("#brand option:selected").text(),
        type: $("#type option:selected").text(),
        fuelType: $("#fuelType option:selected").text(),
        transmissionType: $("#transmissionType option:selected").text(),
        noOfPassengers: $("#noOfPassengers").val(),
        freeKmForDay: $("#freeKMPerDay").val(),
        freeKmForMonth: $("#freeKMPerMonth").val(),
        pricePerExtraKM: $("#priceForExtraKM").val(),
        dailyRatePrice: $("#dailyRatePrice").val(),
        monthlyRatePrice: $("#monthlyRatePrice").val(),
        totalDistanceTraveled: $("#totalDistanceTravelled").val(),
        availableOrNot:$("#availableOrNot option:selected").text(),
        damageOrNot: $("#damageOrNot option:selected").text(),
        underMaintainOrNot: $("#underMaintainOrNot option:selected").text(),
        fontViewImage: null,
        backViewImage: null,
        sideViewImage: null,
        interiorViewImage: null
    }

    $.ajax({
        url: baseURLCarControle+"car",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(carDetails),
        success: function (response) {
            if (response.code == 200) {
                alert($("#carId").val() + " " + response.message);
            }
            clearFieldsFromCarPage()
            loadAllCars();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
}

$("#btnUpdateCar").click(function () {
    let text = "Do you want to update this cars ?";

    if (confirm(text) == true) {
        if ($("#brand option:selected").val() == "" || $("#colour option:selected").val() == "" || $("#type option:selected").val() == "" ||
            $("#fuelType option:selected").val() == "" || $("#registrationNo").val() == "" || $("#noOfPassengers").val() == "" ||
            $("#transmissionType option:selected").val() == "" || $("#dailyRatePrice").val() == "" || $("#monthlyRatePrice").val() == "" ||
            $("#freeKMPerDay").val() == "" || $("#freeKMPerMonth").val() == "" || $("#priceForExtraKM").val() == "" || $("#damageOrNot option:selected").val() == "" ||
            $("#underMaintainOrNot option:selected").val() == "" || $("#totalDistanceTravelled").val() == "" ||  $("#availableOrNot option:selected").val() == ""){
            alert("All Fields Are Required !");
        } else {
            if ($("#errorRegNo").text() != "" || $("#errorPassengers").text() != "" || $("#errorDailyRate").text() != "" || $("#errorMonthlyRate").text() != "" ||
                $("#errorFeeKMDay").text() != "" || $("#errorFreeKMMonth").text() != "" || $("#errorExtraKMPrice").text() != "" || $("#errorTotalDistance").text() != ""){
                alert("Check Input Fields Whether Correct !");
            }else {
                if ($('#uploadFrontView').get(0).files.length === 0 || $('#uploadBackView').get(0).files.length === 0 || $('#uploadSideView').get(0).files.length === 0 || $('#uploadInteriorView').get(0).files.length === 0) {
                    alert("No Images Inserted !");
                }else {
                    updateCar();
                }
            }
        }
    }else {}
});

function clearFieldsAfterUpdate() {
    $("#registrationNo").val("");
    $("#noOfPassengers").val("");
    $("#freeKMPerDay").val("");
    $("#freeKMPerMonth").val("");
    $("#priceForExtraKM").val("");
    $("#dailyRatePrice").val("");
    $("#monthlyRatePrice").val("");
    $("#totalDistanceTravelled").val("");

    $('#brand').find('option:last').remove();
    $('#colour').find('option:last').remove();
    $('#type').find('option:last').remove();
    $('#fuelType').find('option:last').remove();
    $('#transmissionType').find('option:last').remove();
    $('#availableOrNot').find('option:last').remove();
    $('#damageOrNot').find('option:last').remove();
    $('#underMaintainOrNot').find('option:last').remove();

    $("#registrationNo").css('border', '1px solid #e9ecef');
    $("#noOfPassengers").css('border', '1px solid #e9ecef');
    $("#freeKMPerDay").css('border', '1px solid #e9ecef');
    $("#freeKMPerMonth").css('border', '1px solid #e9ecef');
    $("#priceForExtraKM").css('border', '1px solid #e9ecef');
    $("#dailyRatePrice").css('border', '1px solid #e9ecef');
    $("#monthlyRatePrice").css('border', '1px solid #e9ecef');
    $("#totalDistanceTravelled").css('border', '1px solid #e9ecef');
}