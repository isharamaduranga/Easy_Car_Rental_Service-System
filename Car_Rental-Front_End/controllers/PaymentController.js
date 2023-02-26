
/** Back end Request URL */
let baseURLForPayment="http://localhost:8080/Car_Rental_Back_End_war/"

var regExPrice = /^[0-9]{1,10}(.)[0-9]{2}$/;
var regExDate = /^\d{2}\/\d{2}\/\d{4}$/;
var regExDistance = /^[0-9]{1,5}$/;

$("#paymentDate").keyup(function (event) {
    let date = $("#paymentDate").val();
    if (regExDate.test(date)) {
        $("#paymentDate").css('border', '2px solid #31d2f2');
        $("#errorPaymentDate").text("");
        if (event.key == "Enter") {
            $("#rentFee").focus();
        }
    } else {
        $("#paymentDate").css('border', '2px solid red');
        $("#errorPaymentDate").text("Check this field whether correct !");
    }
});

$("#rentFee").keyup(function (event) {
    let rentFee = $("#rentFee").val();
    if (regExPrice.test(rentFee)) {
        $("#rentFee").css('border', '2px solid #31d2f2');
        $("#errorRentFee").text("");
        if (event.key == "Enter") {
            $("#driverFee").focus();
        }
    } else {
        $("#rentFee").css('border', '2px solid red');
        $("#errorRentFee").text("Check this field whether correct !");
    }
});

$("#driverFee").keyup(function (event) {
    let driverFee = $("#driverFee").val();
    if (regExPrice.test(driverFee)) {
        $("#driverFee").css('border', '2px solid #31d2f2');
        $("#errorDriverFee").text("");
        if (event.key == "Enter") {
            $("#loseDamageWaiverPayment").focus();
        }
    } else {
        $("#driverFee").css('border', '2px solid red');
        $("#errorDriverFee").text("Check this field whether correct !");
    }
});

$("#loseDamageWaiverPayment").keyup(function (event) {
    let damage = $("#loseDamageWaiverPayment").val();
    if (regExPrice.test(damage)) {
        $("#loseDamageWaiverPayment").css('border', '2px solid #31d2f2');
        $("#errorDamagePayment").text("");
        if (event.key == "Enter") {
            $("#reducedLoseDamageWaiverPayment").focus();
        }
    } else {
        $("#loseDamageWaiverPayment").css('border', '2px solid red');
        $("#errorDamagePayment").text("Check this field whether correct !");
    }
});

$("#reducedLoseDamageWaiverPayment").keyup(function (event) {
    let damage = $("#reducedLoseDamageWaiverPayment").val();
    if (regExPrice.test(damage)) {
        $("#reducedLoseDamageWaiverPayment").css('border', '2px solid #31d2f2');
        $("#errorReduceDamagePayment").text("");
        if (event.key == "Enter") {
            $("#travelledDistance").focus();
        }
    } else {
        $("#reducedLoseDamageWaiverPayment").css('border', '2px solid red');
        $("#errorReduceDamagePayment").text("Check this field whether correct !");
    }
});

$("#travelledDistance").keyup(function (event) {
    let distance = $("#travelledDistance").val();
    if (regExDistance.test(distance)) {
        $("#travelledDistance").css('border', '2px solid #31d2f2');
        $("#errorTravelledDistance").text("");
        if (event.key == "Enter") {
            $("#extraKm").focus();
        }
    } else {
        $("#travelledDistance").css('border', '2px solid red');
        $("#errorTravelledDistance").text("Check this field whether correct !");
    }
});

$("#extraKm").keyup(function (event) {
    let extra = $("#extraKm").val();
    if (regExDistance.test(extra)) {
        $("#extraKm").css('border', '2px solid #31d2f2');
        $("#errorTravelledExtraKM").text("");
        if (event.key == "Enter") {
            $("#priceForTravelledExtraKm").focus();
        }
    } else {
        $("#extraKm").css('border', '2px solid red');
        $("#errorTravelledExtraKM").text("Check this field whether correct !");
    }
});

$("#priceForTravelledExtraKm").keyup(function (event) {
    let price = $("#priceForTravelledExtraKm").val();
    if (regExPrice.test(price)) {
        $("#priceForTravelledExtraKm").css('border', '2px solid #31d2f2');
        $("#errorPriceExtraKM").text("");
    } else {
        $("#priceForTravelledExtraKm").css('border', '2px solid red');
        $("#errorPriceExtraKM").text("Check this field whether correct !");
    }
});

function generatePaymentIds() {
    $("#paymentId").val("P00-0001");
    var test = "id";

    $.ajax({
        url: baseURLForPayment+"payment?test="+test,
        method: "GET",
        success: function (response) {
            var paymentId = response.data;
            var tempId = parseInt(paymentId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                $("#paymentId").val("P00-000" + tempId);
            } else if (tempId <= 99) {
                $("#paymentId").val("P00-00" + tempId);
            } else if (tempId <= 999) {
                $("#paymentId").val("P00-0" + tempId);
            } else {
                $("#paymentId").val("P00-" + tempId);
            }

        },
        error: function (ob, statusText, error) {
        }

    });
}

$("#calculateFullIncome").click(function () {
    $("#tblPayment tbody > tr").off("click");

    let text = "Do you want to make this payment ?";

    if (confirm(text) == true) {
        if ($("#rentalId").val() == ""||$("#reserveCarId").val() == ""||$("#paymentDate").val() == "" || $("#rentFee").val() == "" || $("#driverFee").val() == "" || $("#extraKm").val() == "" || $("#loseDamageWaiverPayment").val() == "" || $("#priceForTravelledExtraKm").val() == "" ||
            $("#reducedLoseDamageWaiverPayment").val() == "" || $("#travelledDistance").val() == "" || $("#carHarmOrNot option:selected").val() == ""){
            alert("All Fields Are Required !");
        }else {
            if ($("#errorPaymentDate").text() != "" || $("#errorRentFee").text() != "" || $("#errorDriverFee").text() != "" || $("#errorDamagePayment").text() != "" || $("#errorReduceDamagePayment").text() != "" || $("#errorTravelledDistance").text() != "" ||
                $("#errorTravelledExtraKM").text() != "" || $("#errorPriceExtraKM").text() != ""){
                alert("Check Input Fields Whether Correct !");
            }else {
                calculateIncome();
            }
        }
    }else {

    }
});

function loadReservationsIds() {
    $("#rentalId").empty();
    $("#rentalId").append($("<option></option>").attr("value", 0).text("Select ID"));

    var countRentalIds = 1;
    $.ajax({
        url: baseURLForReserveDetails+"reserve",
        method: "GET",
        success: function (response) {
            for (var ids of response.data) {
                $("#rentalId").append($("<option></option>").attr("value", countRentalIds).text(ids.reserveId));
                countRentalIds++;
            }
        },
        error: function (ob) {
        }
    });
}


$("#rentalId").change(function () {
    let rentId = $("#rentalId option:selected").text();
    $("#loseDamageWaiverPayment").val(0);
    $("#reserveCarId").empty();
    $("#reserveCarId").append($("<option></option>").attr("value", 0).text("Select ID"));
    console.log(rentId);
    $.ajax({
        url: baseURLForReserveDetails+"reserve/" + rentId,
        method: "GET",
        success: function (response) {
            for (let i = 0; i < response.data.reserveDetails.length; i++) {
                if ($("#rentalId option:selected").text() == response.data.reserveDetails[i].reserveId){
                    $("#reserveCarId").append($("<option></option>").attr("value", i+1).text(response.data.reserveDetails[i].carId));
                    $("#loseDamageWaiverPayment").val(response.data.reserveDetails[i].loseDamageWaiverPayment);
                }else{
                    $("#reserveCarId").append($("<option></option>").attr("value", 0).text("Select ID"));
                    $("#loseDamageWaiverPayment").val("0");
                }
            }
        },
        error: function (ob) {
        }
    });
});

$("#reserveCarId").change(function () {
    let newCarId = $("#reserveCarId option:selected").text();
    $("#pricePerExKm").val('0');
    $.ajax({
        url: baseURLForReserveDetails+"car/" + newCarId,
        method: "GET",
        success: function (response) {

                console.log(response.data.pricePerExtraKM);
                $("#pricePerExKm").val(response.data.pricePerExtraKM);

        },
        error: function (ob) {
            $("#pricePerExKm").val('0');
        }
    });
});



function calculateIncome() {
    var paymentDetail = {
        paymentId: $("#paymentId").val(),
        paymentDate:$("#paymentDate").val(),
        rentFee: $("#rentFee").val(),
        harmOrNot: $("#driverReleaseOrNot option:selected").text(),
        loseDamagePayment: $("#loseDamageWaiverPayment").val(),
        reduceLoseDamagePayment: $("#reducedLoseDamageWaiverPayment").val(),
        driverFee: $("#driverFee").val(),
        travelledDistance: $("#travelledDistance").val(),
        extraKm: $("#extraKm").val(),
        extraKmPrice: $("#priceForTravelledExtraKm").val(),
        fullPayment: $("#calculateFullIncome").val()
    }

    $.ajax({
        url: baseURLForPayment+"payment",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(paymentDetail),
        success: function (response) {
            if (response.code == 200){
                alert($("#paymentId").val() + " "+ response.message);
                generatePaymentIds();
                loadPayments();

            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

function loadPayments() {
    $.ajax({
        url: baseURLForPayment+"payment",
        method: "GET",
        success: function (response) {

            $("#tblPayment tbody").empty();
            for (var responseKey of response.data) {
                let raw = `<tr><td> ${responseKey.paymentId} </td><td> ${responseKey.paymentDate} </td><td> ${responseKey.rentFee} </td><td> ${responseKey.driverFee} </td>
                               <td> ${responseKey.loseDamagePayment} </td><td> ${responseKey.reduceLoseDamagePayment} </td><td>
                                <span class="badge rounded-pill text-bg-warning">${responseKey.harmOrNot}</span></td> 
                                <td>${responseKey.travelledDistance} </td><td> ${responseKey.extraKm} </td><td>${responseKey.extraKmPrice}</td><td>${responseKey.fullPayment}</td>
                                <td><button type="button" class="btn btn-warning btn-sm px-3" data-ripple-color="dark">
                                    <i class="fas fa-pen-alt"></i>
                                </button></td></tr>`;
                $("#tblPayment tbody").append(raw);
            }
            generatePaymentIds();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}




