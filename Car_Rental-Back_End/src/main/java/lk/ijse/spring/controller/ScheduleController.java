/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:12 AM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("schedule")
@CrossOrigin
public class ScheduleController {

    @Autowired
    ScheduleService scheduleService;

}
