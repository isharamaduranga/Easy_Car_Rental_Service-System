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


let rentalCars = [];
let carSearch = '';
const rentalRate = new Intl.NumberFormat('en-LK', { maximumFractionDigits: 2 });
const carSortFields = {
    '1': ['noOfPassengers', 1], '2': ['noOfPassengers', -1],
    '3': ['dailyRatePrice', 1], '4': ['dailyRatePrice', -1],
    '5': ['monthlyRatePrice', 1], '6': ['monthlyRatePrice', -1]
};

function loadAllCarsToDisplay() {
    $.getJSON(baseURLForReservation + 'car').done(function (response) {
        rentalCars = response.data;
        carSearch = '';
        $('#searchCarsToSort').val('');
        $('#sort').val('0');
        renderRentalCars();
    }).fail(function () {
        rentalCars = [];
        $('#tblShowCars').empty();
        $('#availableCars').text('–');
        $('#noResult').show().find('h1').text('Could not load cars. Please try again.');
    });
}

function renderRentalCars() {
    const matches = rentalCars.filter(car =>
        [car.brand, car.type, car.colour, car.fuelType, car.transmissionType].some(
            value => (value || '').toLowerCase().includes(carSearch)
        )
    );
    const sort = carSortFields[$('#sort').val()];
    if (sort) {
        const [field, direction] = sort;
        matches.sort((a, b) => direction * (a[field] - b[field]));
    }

    $('#availableCars').text(matches.filter(car => car.availableOrNot === 'Available').length);
    $('#noResult').toggle(matches.length === 0).find('h1').text('No matching cars found.');
    const list = $('#tblShowCars').empty();
    const template = document.getElementById('rentalCarCard');
    for (const car of matches) {
        const card = $(template.content.firstElementChild.cloneNode(true));
        const available = car.availableOrNot === 'Available';
        card.find('img').attr({src: carImageUrl(car.fontViewImage), alt: car.brand});
        card.find('.car-status').text(car.availableOrNot).addClass(available ? 'bg-success' : 'bg-secondary');
        card.find('.car-category').text(car.type);
        card.find('.car-model').text(car.brand);
        card.find('.car-seats').text(car.noOfPassengers + ' seats');
        card.find('.car-transmission').text(car.transmissionType);
        card.find('.car-fuel').text(car.fuelType);
        card.find('.car-colour').text(car.colour);
        card.find('.car-daily').text('Rs. ' + rentalRate.format(car.dailyRatePrice));
        card.find('.car-monthly').text('Rs. ' + rentalRate.format(car.monthlyRatePrice));
        card.find('.btnRent').prop('disabled', !available).on('click', function () {
            if (confirm('Do you want to rent this car?')) {
                pasteDataToReservationFields();
                loadSelectedCars(car.carId);
            }
        });
        list.append(card);
    }
}

$('#sort').on('change', renderRentalCars);
$('#btnSearchCarsToSort').on('click', function () {
    carSearch = $('#searchCarsToSort').val().trim().toLowerCase();
    renderRentalCars();
});


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
                                        
                                            <img  src="${carImageUrl(response.data.fontViewImage)}"
                                             alt="" 
                                             style="width: 50px; height: 50px" class=""/>
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
                                            <label class="form-check-label text-primary" for="checkDriverIfWant">Click Me: Need a Driver</label>
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

            /** Load ReserveID And Schedule ids */
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




/** for Check All Details condition are totally correct.. */

var bookingDenyOrAccept;

$("#btnBook").click(function () {



    if ($("#PName").val() == "" || $("#PContact").val() == "" || $("#PNIC").val() == "") {
        alert("Some personal details are not completed. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    }else if ($('#uploadpaymentSlip').get(0).files.length === 0){
        alert("Your Payment Slip are not Upload. So your booking is deny!..");
        bookingDenyOrAccept = "Deny";
    }else if (!regExFullName.test($("#PName").val()) || !regExContact.test($("#PContact").val()) || !regExNIC.test($("#PNIC").val())) {
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
        $("#btnBook").prop("disabled", true);
        findCustomerToReserve(bookingDenyOrAccept);
    }


});

function findCustomerToReserve(bookingDenyOrAccept) {

    $.ajax({
        url: baseURLForReservation+"customer/findValidNic/" + $("#PNIC").val(),
        method: "GET",
        success: function (response) {
            reserve(response.data,bookingDenyOrAccept);
        },
        error: function (ob) {
            $("#btnBook").prop("disabled", false);
            if (ob.responseJSON && ob.responseJSON.message) {
                alert("Please check Your NIC number is Correct !!! ("+ob.responseJSON.message+")");
            } else {
                alert("Something went Wrong !!! while processing your request.");
            }
        }
    });
}

function reserve(customer,bookingDenyOrAccept) {

    const AllDetails = $("#tblSelectedCars tbody tr").map(function () {
        const cells = $(this).children("td");
        const wantsDriver = $(this).find(".checkDriverIfWant").is(":checked");
        return {
            reserveId: $("#reserveId").val(),
            carId: cells.eq(1).text().trim(),
            driverId: wantsDriver ? cells.eq(6).text().trim() : "none",
            type: cells.eq(4).text().trim(),
            colour: cells.eq(3).text().trim(),
            brand: cells.eq(2).text().trim(),
            driverWantOrNot: wantsDriver ? "Want" : "Not Want",
            driverName: wantsDriver ? cells.eq(7).text().trim() : "none",
            driverContact: wantsDriver ? cells.eq(8).text().trim() : "none",
            loseDamageWaiverPayment: Number(cells.eq(9).text().trim())
        };
    }).get();


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
            $("#tblSelectedCars tbody").empty();
            count = 1;
            lossPayment = 0;
            gotoMainPage();
        },
        error: function (ob) {
            alert(ob.responseJSON?.message || "Could not save the booking.");
        },
        complete: function () {
            $("#btnBook").prop("disabled", false);
        }
    });

}
