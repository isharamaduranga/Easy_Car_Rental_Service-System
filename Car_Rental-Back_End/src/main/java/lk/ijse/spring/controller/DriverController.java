/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/18/2023
 * Time        : 5:09 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("driver")
@CrossOrigin
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driverDTO){
        driverService.saveDriver(driverDTO);
        return new ResponseUtil(200, "Successfully Saved.",null);
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateDriverIds(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", driverService.generateDriverIds());
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil(200, "Ok", driverService.getAllDrivers());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id){
        return new ResponseUtil(200, "Ok.",driverService.searchDriver(id));
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO){
        driverService.updateDriver(driverDTO);
        return new ResponseUtil(200, "Successfully Updated.",null);
    }
    @GetMapping(path = "/USER/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUserFromDriver(@PathVariable("id") String id){
        return new ResponseUtil(200, "Ok.",driverService.searchUserFromDriver(id));
    }

    @GetMapping(path = "/status/{release}")
    public ResponseUtil assignRandomlyDriver(@PathVariable("release") String release) {
        return new ResponseUtil(200, "Ok", driverService.assignRandomlyDriver(release));
    }


}
