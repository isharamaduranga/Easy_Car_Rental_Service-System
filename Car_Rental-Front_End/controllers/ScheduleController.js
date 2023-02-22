
/** Back end Request URL */
let baseURLForSchedule = "http://localhost:8080/Car_Rental_Back_End_war/"



$("#tblSchedule tbody > tr").off("click");

function loadSchedule() {
    $.ajax({
        url: baseURLForSchedule+"schedule",
        method: "GET",
        success: function (response) {

            $(".tblSchedule tbody").empty();
            for (var key of response.data) {
                let raw = `<tr><td> ${key.scheduleId} </td>
                           <td> ${key.reserveDetails.reserveId} </td>
                           <td> ${key.reserveDetails.carId} </td>
                           <td> ${key.reserveDetails.driverId} </td>
                           <td> ${key.pickUpDate} </td><td> ${key.pickUpTime} </td>
                           <td> ${key.pickUpVenue} </td> 
                           <td>${key.returnDate} </td><td> ${key.returnTime} </td><td>${key.returnVenue}</td>
                           <td><span class="badge rounded-pill text-bg-success">${key.releaseOrNot}</span></td></tr>`;

                $(".tblSchedule tbody").append(raw);
            }
        },
        error: function (ob) {
            alert(ob.responseJSON.message);
        }
    });
}