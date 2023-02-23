
/** Back end Request URL */
let baseURLForReserveDetails = "http://localhost:8080/Car_Rental_Back_End_war/"


function loadAllReservations() {
    $.ajax({
        url: baseURLForReserveDetails+"reserve",
        method: "GET",
        success: function (response) {

            $("#tblReserve tbody").empty();
            for (var responseKey of response.data) {
                if (responseKey.reserveDetails) {
                    for (let i = 0; i < responseKey.reserveDetails.length; i++) {
                        let wantOrNot = responseKey.reserveDetails[i].driverWantOrNot;

                        let raw = `<tr><td> ${responseKey.reserveDate} </td><td> ${responseKey.reserveId} </td><td> ${responseKey.customer.customerId} </td>
                                       <td> ${responseKey.pickUpDate} </td><td> ${responseKey.pickUpTime} </td><td> ${responseKey.pickUpVenue} </td> 
                                        <td>${responseKey.returnDate} </td><td> ${responseKey.returnTime} </td><td>${responseKey.returnVenue}</td>
                                        <td>${responseKey.destination}</td><td>${responseKey.duration}</td><td><span class="badge rounded-pill text-bg-success">${responseKey.requestAcceptOrDeny}</span></td>
                                        <td><span class="badge rounded-pill text-bg-warning">${wantOrNot}</span></td>
                                        <td>
                                        <button type="button" class="btn btn-info btn-sm px-3" data-ripple-color="dark">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        </td></tr>`;
                        $("#tblReserve tbody").append(raw);
                    }
                }
            }
            BindRowReserveTableClickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}

}

/*function loadAllReservations() {
    $.ajax({
        url: baseURLForReserveDetails+"reserve",
        method: "GET",
        success: function (response) {

            $("#tblReserve tbody").empty();
            for (var responseKey of response.data) {
                for (let i = 0; i < response.data.reserveDetails.length; i++) {
                let wantOrNot = response.data.reserveDetails[i].driverWantOrNot;

                let raw = `<tr><td> ${responseKey.reserveDate} </td><td> ${responseKey.reserveId} </td><td> ${responseKey.customer.customerId} </td>
                               <td> ${responseKey.pickUpDate} </td><td> ${responseKey.pickUpTime} </td><td> ${responseKey.pickUpVenue} </td> 
                                <td>${responseKey.returnDate} </td><td> ${responseKey.returnTime} </td><td>${responseKey.returnVenue}</td>
                                <td>${responseKey.destination}</td><td>${responseKey.duration}</td><td><span class="badge rounded-pill text-bg-success">${responseKey.requestAcceptOrDeny}</span></td>
                                <td><span class="badge rounded-pill text-bg-warning">${wantOrNot}</span></td>
                                <td>
                                <button type="button" class="btn btn-info btn-sm px-3" data-ripple-color="dark">
                                    <i class="fas fa-eye"></i>
                                </button>
                                </td></tr>`;
                $("#tblReserve tbody").append(raw);
            }
            }
            BindRowReserveTableClickEvent();
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}*/

