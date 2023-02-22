/** Back end Request URL */
let baseURLForReservation = "http://localhost:8080/Car_Rental_Back_End_war/"


$("#PName").keyup(function (event) {
    let name = $("#PName").val();
    if (regExFullName.test(name)) {
        $("#PName").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#PContact").focus();
        }
    } else {
        $("#PName").css('border', '2px solid red');
    }
});

$("#PContact").keyup(function (event) {
    let contact = $("#PContact").val();
    if (regExContact.test(contact)) {
        $("#PContact").css('border', '2px solid #31d2f2');
        if (event.key == "Enter") {
            $("#PNIC").focus();
        }
    } else {
        $("#PContact").css('border', '2px solid red');
    }
});

$("#PNIC").keyup(function (event) {
    let nic = $("#PNIC").val();
    if (regExNIC.test(nic)) {
        $("#PNIC").css('border', '2px solid #31d2f2');
    } else {
        $("#PNIC").css('border', '2px solid red');
    }
});

$("#noResult").css('display', 'none');

countAvailableCars();

function countAvailableCars() {
    $.ajax({
        url: baseURLForReservation+"car/countOfAvailableCars/" + "Available",
        method: "GET",
        success: function (response) {
            $("#availableCars").text(response.data);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}


var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);



function generateVReserveIds() {
    $("#reserveId").val("RE00-0001");
    var tempId = "id";

    $.ajax({
        url: baseURLForReservation+"reserve?tempId=" + tempId,
        method: "GET",
        success: function (response) {
            var reserveId = response.data;
            if (reserveId) {
                var tempId = parseInt(reserveId.split("-")[1]);
                tempId = tempId + 1;
                if (tempId <= 9) {
                    $("#reserveId").val("RE00-000" + tempId);
                } else if (tempId <= 99) {
                    $("#reserveId").val("RE00-00" + tempId);
                } else if (tempId <= 999) {
                    $("#reserveId").val("RE00-0" + tempId);
                } else {
                    $("#reserveId").val("RE00-" + tempId);
                }
            }
        },
        error: function (ob, statusText, error) {
        }
    });
}

function generateScheduleIds() {
    $("#scheduleId").val("S00-0001");
    var tempId = "id";

    $.ajax({
        url: baseURLForReservation+"schedule?tempId=" + tempId,
        method: "GET",
        success: function (response) {
            var scheduleId = response.data;
            var tempId = parseInt(scheduleId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#scheduleId").val("S00-000" + tempId);
            } else if (tempId <= 99) {
                $("#scheduleId").val("S00-00" + tempId);
            } else if (tempId <= 999) {
                $("#scheduleId").val("S00-0" + tempId);
            } else {
                $("#scheduleId").val("S00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}




function pasteDate() {
    $("#pickUpDateEdit").val($("#pickUpDate").val());
    $("#pickUpTimeEdit").val($("#pickUpTime").val());
    $("#returnDateEdit").val($("#returnDate").val());
    $("#returnTimeEdit").val($("#returnTime").val());
    $("#pickUpLocationEdit").val($("#pickUpLocation").val());
    $("#returnLocationEdit").val($("#returnLocation").val());
    $("#destinationEdit").val($("#destination").val());
    $("#durationEdit").val($("#duration").val());

    $("#pickUpDateEdit").prop("disabled", true);
    $("#pickUpTimeEdit").prop("disabled", true);
    $("#returnDateEdit").prop("disabled", true);
    $("#returnTimeEdit").prop("disabled", true);
    $("#pickUpLocationEdit").prop("disabled", true);
    $("#returnLocationEdit").prop("disabled", true);
    $("#destinationEdit").prop("disabled", true);
    $("#durationEdit").prop("disabled", true);
}

/*************************** For customer booking details edit and update *************************** */

$("#pickUpDateEdit").keyup(function (event) {
    let pickupDate = $("#pickUpDateEdit").val();
    if (regExPickupDate.test(pickupDate)) {
        $("#pickUpDateEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupDateAgain").text("");
    } else {
        $("#pickUpDateEdit").css('border', '2px solid red');
        $("#errorPickupDateAgain").text("Check this field whether correct !");
    }
});

$("#pickUpTimeEdit").keyup(function (event) {
    let pickupTime = $("#pickUpTimeEdit").val();
    if (regExPickupTime.test(pickupTime)) {
        $("#pickUpTimeEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupTimeAgain").text("");
    } else {
        $("#pickUpTimeEdit").css('border', '2px solid red');
        $("#errorPickupTimeAgain").text("Check this field whether correct !");
    }
});

$("#returnDateEdit").keyup(function (event) {
    let returnDate = $("#returnDateEdit").val();
    if (regExReturnDate.test(returnDate)) {
        $("#returnDateEdit").css('border', '2px solid #31d2f2');
        $("#errorDropDateAgain").text("");
    } else {
        $("#returnDateEdit").css('border', '2px solid red');
        $("#errorDropDateAgain").text("Check this field whether correct !");
    }
});

$("#returnTimeEdit").keyup(function (event) {
    let returnTime = $("#returnTimeEdit").val();
    if (regExReturnTime.test(returnTime)) {
        $("#returnTimeEdit").css('border', '2px solid #31d2f2');
        $("#errorDroTimeAgain").text("");
    } else {
        $("#returnTimeEdit").css('border', '2px solid red');
        $("#errorDroTimeAgain").text("Check this field whether correct !");
    }
});

$("#pickUpLocationEdit").keyup(function (event) {
    let pickupLocation = $("#pickUpLocationEdit").val();
    if (regExPickupLocation.test(pickupLocation)) {
        $("#pickUpLocationEdit").css('border', '2px solid #31d2f2');
        $("#errorPickupLocationAgain").text("");
    } else {
        $("#pickUpLocationEdit").css('border', '2px solid red');
        $("#errorPickupLocationAgain").text("Check this field whether correct !");
    }
});

$("#returnLocationEdit").keyup(function (event) {
    let returnLocation = $("#returnLocationEdit").val();
    if (regExReturnLocation.test(returnLocation)) {
        $("#returnLocationEdit").css('border', '2px solid #31d2f2');
        $("#errorDropLocationAgain").text("");
    } else {
        $("#returnLocationEdit").css('border', '2px solid red');
        $("#errorDropLocationAgain").text("Check this field whether correct !");
    }
});

$("#destinationEdit").keyup(function (event) {
    let destination = $("#destinationEdit").val();
    if (regExDestination.test(destination)) {
        $("#destinationEdit").css('border', '2px solid #31d2f2');
        $("#errorDestinationAgain").text("");
    } else {
        $("#destinationEdit").css('border', '2px solid red');
        $("#errorDestinationAgain").text("Check this field whether correct !");
    }
});

$("#durationEdit").keyup(function (event) {
    let duration = $("#durationEdit").val();
    if (regExDuration.test(duration)) {
        $("#durationEdit").css('border', '2px solid #31d2f2');
        $("#errorDurationAgain").text("");
    } else {
        $("#durationEdit").css('border', '2px solid red');
        $("#errorDurationAgain").text("Check this field whether correct !");
    }
});

$("#editRentData").click(function () {
    let text = "Do you want to Edit Data?";

    if (confirm(text) == true) {
        $("#pickUpDateEdit").prop("disabled", false);
        $("#pickUpTimeEdit").prop("disabled", false);
        $("#returnDateEdit").prop("disabled", false);
        $("#returnTimeEdit").prop("disabled", false);
        $("#pickUpLocationEdit").prop("disabled", false);
        $("#returnLocationEdit").prop("disabled", false);
        $("#destinationEdit").prop("disabled", false);
        $("#durationEdit").prop("disabled", false);
    }
});


/*************************** The End booking details edit  *************************** */



/** ====================  Fully car Filter proceed implement methods and function ===================== */
/** ============================================================================= ===================== */
loadAllCarsToDisplay();

function loadAllCarsToDisplay() {

    $.ajax({

        url: baseURLForReservation + "car",
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();
                    console.log(availableStatus);
                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                         pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}



function findPassengersAsc(passengerAscending) {
    $.ajax({

        url: baseURLForReservation + "car/sortPassengerAsc/"+passengerAscending,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });

}

function findPassengersDsc(passengerDscending) {
    $.ajax({

        url: baseURLForReservation + "car/sortPassengerDsc/"+passengerDscending,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });

}

function findDailyRateAsc(dailyRateAsc) {
    $.ajax({

        url: baseURLForReservation + "car/sortDailyRateAsc/"+dailyRateAsc,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findDailyRateDsc(dailyRateDsc) {
    $.ajax({

        url: baseURLForReservation + "car/sortDailyRateDsc/"+dailyRateDsc,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findMonthlyRateAsc(monthlyRateAsc) {
    $.ajax({

        url: baseURLForReservation + "car/sortMonthlyRateAsc/"+monthlyRateAsc,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {

                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findMonthlyRateDsc(monthlyRateDsc) {
    $.ajax({

        url: baseURLForReservation + "car/sortMonthlyRateDsc/"+monthlyRateDsc,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                               <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                

                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;

                $("#tblShowCars").append(newDiv);

            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {
                }
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}


$("#sort").click(function () {
    if ($("#sort option:selected").text() == "Passengers - Ascending") {
        findPassengersAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Passengers - Descending") {
        findPassengersDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Daily Rate Price - Ascending") {
        findDailyRateAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Daily Rate Price - Descending") {
        findDailyRateDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Monthly Rate Price - Ascending") {
        findMonthlyRateAsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Monthly Rate Price - Descending") {
        findMonthlyRateDsc($("#sort option:selected").text());
    } else if ($("#sort option:selected").text() == "Recommended") {
        loadAllCarsToDisplay();
    }
});
/** ========================== The End of Filtered Functions ======================================== */
/** ================================================================================================== */


/** ====================  Fully car Search by using different car properties  proceed implement  functions ===================== */
/** ====================================================================================================================== */



function findTransmissionType(type) {
    $.ajax({

        url: baseURLForReservation + "car/schByTransmission/"+type,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
           /* alert(ob.responseJSON.message);*/
        }
    });
}

function findType(carType) {
    $.ajax({

        url: baseURLForReservation + "car/schByCarType/"+carType,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            /*alert(ob.responseJSON.message);*/
        }
    });
}

function findBrand(brand) {
    $.ajax({

        url: baseURLForReservation + "car/schByCarBrand/"+brand,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
           /* alert(ob.responseJSON.message);*/
        }
    });
}

function findFuelType(fuelType) {
    $.ajax({

        url: baseURLForReservation + "car/schByFuelType/"+fuelType,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            /*alert(ob.responseJSON.message);*/
        }
    });
}

function findColour(colour) {
    $.ajax({

        url: baseURLForReservation + "car/schByColour/"+colour,
        method: "GET",

        success: function (resp) {
            if (resp.data.length == 0) {
                $("#noResult").css('display', 'block');
            } else {
                $("#noResult").css('display', 'none');
            }

            var rentFeePerDay;
            var rentFeePerMonth;

            $("#tblShowCars").empty();

            for (let key of resp.data) {

                if (key.type == "Luxury") {
                    rentFeePerDay = 8000.00;
                    rentFeePerMonth = 25000.00;
                } else if (key.type = "premium") {
                    rentFeePerDay = 5000.00;
                    rentFeePerMonth = 20000.00;
                } else if (key.type = "General") {
                    rentFeePerDay = 3000.00;
                    rentFeePerMonth = 10000.00;
                }

                let newDiv =
                    `<div class="col-4">
                <!-- card 01-->
                <li>
                    <div class="featured-car-card">
                        <figure class="card-banner">
                            <img alt="Toyota RAV4 2021" class="w-100" height="300" loading="lazy"
                                 src="../assets/images/car_bg_home/car-1.jpg"
                                 width="440">
                        </figure>

                        <div class="card-content">

                            <div class="card-title-wrapper">
                                <span class="cid text-white" style="display: none;">${key.carId}</span>
                                <h4 class="h3 card-title">${key.brand}</h4>
                                <data class="year" value="2021">${key.availableOrNot}</data>
                            </div>
                            <h5 style="color: crimson">${key.type}</h5>
                            <ul class="card-list">

                                <li class="card-list-item">
                                    <ion-icon name="people-outline"></ion-icon>

                                    <span class="card-item-text">${key.noOfPassengers}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="flash-outline"></ion-icon>

                                    <span class="card-item-text">${key.transmissionType}</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="speedometer-outline"></ion-icon>

                                    <span class="card-item-text">${key.fuelType}-6.1km/1-lt</span>
                                </li>

                                <li class="card-list-item">
                                    <ion-icon name="hardware-chip-outline"></ion-icon>

                                    <span class="card-item-text">${key.colour}</span>
                                </li>
                            </ul>

                            <div class="card-price-wrapper">
                                <p class="card-price">
                                    <strong>${rentFeePerDay}</strong> / Daily
                                </p>
                                <p class="card-price">
                                    <strong>${rentFeePerMonth}</strong> / Month
                                </p>
                                
                                <button aria-label="Add to favourite list" class="btn fav-btn">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                                <button type="button" class="btn btn-info btnRent">Rent now</button>
                            </div>
                        </div>
                    </div>
                </li>
            </div>`;
                $("#tblShowCars").append(newDiv);
            }

            $(".btnRent").click(function () {
                let text = "Do you want to rent this car?";
                if (confirm(text)) {

                    let availableStatus = $(this).closest('li').find('data.year').text();

                    if (availableStatus == "Not Available") {
                        alert("This car is not available now! Choose another one!...");
                    }else {
                        pasteDataToReservationFields();
                        loadSelectedCars($(this).closest('li').find('span.cid').text());
                    }
                }
                else {

                }
            });
        },
        error: function (ob) {
            /*alert(ob.responseJSON.message);*/
        }
    });
}

$("#btnSearchCarsToSort").click(function () {
    findTransmissionType($("#searchCarsToSort").val());
    findType($("#searchCarsToSort").val());
    findBrand($("#searchCarsToSort").val());
    findFuelType($("#searchCarsToSort").val());
    findColour($("#searchCarsToSort").val());
});




/** =====================================The End of Search Functions============================================== */
/** ================================================================================================================ */

function pasteDataToReservationFields() {
    $("#BPickupDate").val($("#pickUpDateEdit").val());
    $("#BPickupTime").val($("#pickUpTimeEdit").val());
    $("#BReturnDate").val($("#returnDateEdit").val());
    $("#BReturnTime").val($("#returnTimeEdit").val());
    $("#BPickupLocation").val($("#pickUpLocationEdit").val());
    $("#BReturnLocation").val($("#returnLocationEdit").val());
    $("#BDestination").val($("#destinationEdit").val());
    $("#BDuration").val($("#durationEdit").val());
}


var lossPayment = 0;
var tblRow = -1;
var count = 1;
var clickId="none";
var clickName="none";
var clickContact="none";

function loadSelectedCars(carId) {
    $.ajax({
        url: baseURLForReservation+"car/" + carId,
        method: "GET",
        success: function (response) {

            if (response.data.type == "General") {
                lossPayment += 10000.00;
            } else if (response.data.type == "Premium") {
                lossPayment += 15000.00;
            } else if (response.data.type == "Luxury") {
                lossPayment += 20000.00;
            }

            let raw = `<tr>
                                    <td id="scope">
                                        ${count}
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="../assets/images/panel3.png" alt="" style="width: 50px; height: 50px" class=""/>
                                        </div>
                                        <h6  id="id" class="id text-white">${response.data.carId}</h6>
                                    </td>
                                    <td>
                                       ${response.data.brand}
                                    </td>
                                    <td>
                                        ${response.data.colour}
                                    </td>
                                    <td>
                                        ${response.data.type}
                                    </td>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input checkDriverIfWant text-danger" type="checkbox" value="" id="checkDriverIfWant" />
                                            <label class="form-check-label text-primary" for="checkDriverIfWant">If you want a driver please click</label>
                                        </div>
                                    </td>
                                     <td id="did" class="text-white" style="font-size: 2px">
                                        ${clickId}
                                    </td>
                                    <td id="dname">
                                        ${clickName}
                                    </td>
                                    <td id="dcontact">
                                        ${clickContact}
                                    </td>
                                    <td>
                                        ${lossPayment}
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm px-3 btnCancelCar" data-ripple-color="dark" id="btnCancelCar">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>`;
            $("#tblSelectedCars tbody").append(raw);
            count += 1;

            openBookingPage();

            $(".checkDriverIfWant").off("click");

            findDriverData();

            $("#tblSelectedCars tbody").on('click', '#btnCancelCar', function () {
                $("#tblSelectedCars tbody > tr").off("click");

                $("#tblSelectedCars tbody > tr").click(function () {
                    let text = "Do you want to remove this car ?";

                    if (confirm(text) == true) {
                        tblRow = $(this);
                        tblRow.remove();
                    }else {

                    }
                });
            });
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function findDriverData() {
    $.ajax({
        url: baseURLForReservation+"driver/status/" + "Release",
        method: "GET",
        success: function (response) {
            load(response.data.driverId,response.data.driverName, response.data.driverContact);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

var driverName;
var driverContact;
var driverId;

/** Load driver release or not and load available release driver */
function load(id,name, contact) {
    driverName = name;
    driverContact = contact;
    driverId = id;
    $(".checkDriverIfWant").click(function () {
        $("#tblSelectedCars tbody > tr").click(function () {
            if ($('.checkDriverIfWant').is(':checked')) {
                if ($(this).find(".checkDriverIfWant").is(":checked")) {
                    $(this).find("td:eq(6)").text(driverId);
                    $(this).find("td:eq(7)").text(driverName);
                    $(this).find("td:eq(8)").text(driverContact);
                }
            }
        });
    });
}

var bookingDenyOrAccept;

$("#btnBook").click(function () {

    if ($("#PName").val() == "" || $("#PContact").val() == "" || $("#PNIC").val() == "") {
        alert("Some personal details are not completed. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    } else if (!regExFullName.test($("#PName").val()) || !regExContact.test($("#PContact").val()) || !regExNIC.test($("#PNIC").val())) {
        alert("Some fields are not in correct format. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    } else if ($("#BPickupDate").val() == "" || $("#BPickupTime").val() == "" || $("#BPickupLocation").val() == "" || $("#BReturnDate").val() == "" || $("#BReturnTime").val() == "" || $("#BReturnLocation").val() == "" || $("#BDestination").val() == "" || $("#BDuration").val() == "") {
        alert("Some booking details fields are not completed. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    } else if ($("#tblSelectedCars tbody tr").length == 0) {
        alert("Table is empty. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    } else {
        bookingDenyOrAccept = "Accept";
    }

    findCustomerToReserve(bookingDenyOrAccept)
});

function findCustomerToReserve(bookingDenyOrAccept) {

    $.ajax({
        url: baseURLForReservation+"customer/findValidNic/" + $("#PNIC").val(),
        method: "GET",
        success: function (response) {
            reserve(response.data,bookingDenyOrAccept);
        },
        error: function (ob) {
            if (ob.responseJSON && ob.responseJSON.message) {
                alert(ob.responseJSON.message);
            } else {
                alert("Something went Wrong !!! while processing your request.");
            }
        }
    });
}

var driverWantOrNot;



function reserve(customer,bookingDenyOrAccept) {

    var AllDetails = new Array();
    for (var i = 0; i < $("#tblSelectedCars tbody tr").length; i++) {

        if ($('#checkDriverIfWant').is(':checked')){
            driverWantOrNot = "Want";
        } else {
            driverWantOrNot = "Not Want";
        }

        var reserveItems = {
            reserveId: $("#reserveId").val(),
            carId: $("#tblSelectedCars tbody tr").children(':nth-child(2)')[i].innerText,
            driverId: $("#tblSelectedCars tbody tr").children(':nth-child(7)')[i].innerText,
            type: $("#tblSelectedCars tbody tr").children(':nth-child(5)')[i].innerText,
            colour: $("#tblSelectedCars tbody tr").children(':nth-child(4)')[i].innerText,
            brand: $("#tblSelectedCars tbody tr").children(':nth-child(3)')[i].innerText,
            driverWantOrNot:driverWantOrNot,
            driverName: $("#tblSelectedCars tbody tr").children(':nth-child(8)')[i].innerText,
            driverContact: $("#tblSelectedCars tbody tr").children(':nth-child(9)')[i].innerText,
            loseDamageWaiverPayment: $("#tblSelectedCars tbody tr").children(':nth-child(10)')[i].innerText
        }
        AllDetails.push(reserveItems);
    }

    var reserveDetail = {
        reserveId: $("#reserveId").val(),
        customer: customer,
        pickUpDate: $("#BPickupDate").val(),
        reserveDate: today.toString(),
        pickUpTime: $("#BPickupTime").val(),
        destination: $("#BDestination").val(),
        duration:parseInt($("#BDuration").val()),
        pickUpVenue: $("#BPickupLocation").val(),
        returnVenue: $("#BReturnLocation").val(),
        returnDate: $("#BReturnDate").val(),
        returnTime: $("#BReturnTime").val(),
        requestAcceptOrDeny: bookingDenyOrAccept,
        reserveDetails: AllDetails
    }


    $.ajax({
        url: baseURLForReservation+"reserve",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(reserveDetail),
        success: function (response) {
            alert(response.message);
           /** load Driver Schedule */
           loadDriverSchedule();
            gotoMainPage();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function loadDriverSchedule() {
    console.log("schedule");
    for (var i = 0; i < $("#tblSelectedCars tbody tr").length; i++) {

        if ($('#checkDriverIfWant').is(':checked')) {
            driverWantOrNot = "Want";
        } else {
            driverWantOrNot = "Not Want";
        }

        var reserveItems = {
            reserveId: $("#reserveId").val(),
            carId: $("#tblSelectedCars tbody tr").children(':nth-child(2)')[i].innerText,
            driverId: $("#tblSelectedCars tbody tr").children(':nth-child(7)')[i].innerText,
            type: $("#tblSelectedCars tbody tr").children(':nth-child(5)')[i].innerText,
            colour: $("#tblSelectedCars tbody tr").children(':nth-child(4)')[i].innerText,
            brand: $("#tblSelectedCars tbody tr").children(':nth-child(3)')[i].innerText,
            driverWantOrNot:driverWantOrNot,
            driverName: $("#tblSelectedCars tbody tr").children(':nth-child(8)')[i].innerText,
            driverContact: $("#tblSelectedCars tbody tr").children(':nth-child(9)')[i].innerText,
            loseDamageWaiverPayment: $("#tblSelectedCars tbody tr").children(':nth-child(10)')[i].innerText
        }

        console.log(reserveItems);

        generateScheduleIds();

        var schedule={
            scheduleId:$("#scheduleId").val(),
            pickUpDate:$("#BPickupDate").val(),
            pickUpTime:$("#BPickupTime").val(),
            returnDate:$("#BReturnDate").val(),
            returnTime:$("#BReturnTime").val(),
            pickUpVenue:$("#BPickupLocation").val(),
            returnVenue:$("#BReturnLocation").val(),
            releaseOrNot:"Not Release",
            reserveDetails:reserveItems
        }

        console.log(schedule);

        $.ajax({
            url: baseURLForReservation+"schedule",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(schedule),
            success: function (response) {
                alert(response.message);
                console.log("success");
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });

    }
}

