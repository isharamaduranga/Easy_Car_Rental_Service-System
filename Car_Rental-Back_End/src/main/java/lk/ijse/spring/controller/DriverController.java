/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/18/2023
 * Time        : 5:09 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("driver")
public class DriverController {

    @Autowired
    private DriverService driverService;


}
