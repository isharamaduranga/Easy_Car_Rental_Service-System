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
                                <span class="text-white" style="display: none;"><small>${key.carId}</small></span>
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
                        alert("This car is not available now!");
                         pasteDataToReservationFields();
                        //loadSelectedCars(tblSelectCarRow.children()[1].innerText);
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

