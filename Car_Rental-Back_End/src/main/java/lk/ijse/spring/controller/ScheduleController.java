/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:12 AM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ScheduleDTO;
import lk.ijse.spring.service.ScheduleService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("schedule")
@CrossOrigin
public class ScheduleController {

    @Autowired
    ScheduleService scheduleService;

    @GetMapping(params = {"tempId"})
    public ResponseUtil generateScheduleId(@RequestParam  String tempId){
        return new ResponseUtil(200,"load",scheduleService.generateScheduleId());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveSchedule(@RequestBody ScheduleDTO scheduleDTO){
        scheduleService.saveSchedule(scheduleDTO);
        return new ResponseUtil(200, "Successfully Saved.",null);
    }

}

