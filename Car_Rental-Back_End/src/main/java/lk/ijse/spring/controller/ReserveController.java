/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:08 AM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ReserveDTO;
import lk.ijse.spring.service.ReserveService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reserve")
@CrossOrigin
public class ReserveController {
    @Autowired
    ReserveService reserveService;

    @GetMapping(params = {"tempId"})
    public ResponseUtil generateReserveId(@RequestParam String tempId ){
        return new ResponseUtil(200,"load",reserveService.generateReserveId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveReservation(@RequestBody ReserveDTO dto){
        reserveService.saveReservationCars(dto);
        return new ResponseUtil(200, "Your Booking Successfully.",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllReservations(){
        return new ResponseUtil(200,"Ok",reserveService.getAllReservations());
    }


    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchReservation(@PathVariable String id){
        return new ResponseUtil(200, "Ok.",reserveService.searchReservation(id));
    }

    @GetMapping(path ="/DailyReservation/{date}")
    public ResponseUtil countDailyReservation(@PathVariable("date") String date){
        return new ResponseUtil(200, "Ök", reserveService.countDailyReservation(date));
    }

    @GetMapping(path ="{date}/{accept}")
    public ResponseUtil activeReservationPerDay(@PathVariable("date") String date, @PathVariable("accept") String accept){
        return new ResponseUtil(200, "Ök", reserveService.activeReservationPerDay(date,accept));
    }

    @GetMapping(path ="/ReservationCount/{countAll}")
    public ResponseUtil countAllReservation(@PathVariable("countAll") String countAll){
        return new ResponseUtil(200, "Ök", reserveService.countAllReservation());
    }



}

