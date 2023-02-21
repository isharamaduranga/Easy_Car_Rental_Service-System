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




var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear() + "-" + (month) + "-" + (day);



function generateVReserveIds() {
    $("#reserveId").val("RE00-0001");
    var test = "id";

    $.ajax({
        url: baseURLForReservation+"reserve?test=" + test,
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
    var test = "id";

    $.ajax({
        url: baseURLForReservation+"schedule?test=" + test,
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








var tblSelectCarRow = -1;
loadAllCarsToDisplay();

/** ====================  Fully car Filter proceed implement methods and function ===================== */
/** ============================================================================= ===================== */


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
            alert(ob.responseJSON.message);
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
            alert(ob.responseJSON.message);
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
            alert(ob.responseJSON.message);
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
            alert(ob.responseJSON.message);
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
            alert(ob.responseJSON.message);
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
                                            <img src="assets/images/1200x-1.jpg" alt="" style="width: 50px; height: 50px" class=""/>
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
                                            <input class="form-check-input checkDriverIfWant" type="checkbox" value="" id="checkDriverIfWant" />
                                            <label class="form-check-label fs-4" for="checkDriverIfWant">If you want a driver please click</label>
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
        url: baseURLForReservation+"driver/ASSIGN/" + "Release",
        method: "GET",
        success: function (response) {
            load(response.data.driverId,response.data.driverName, response.data.driverContact);
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}