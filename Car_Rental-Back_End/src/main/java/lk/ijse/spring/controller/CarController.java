/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/17/2023
 * Time        : 8:02 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCar() {
        return new ResponseUtil(200, "Ok", carService.getAllCars());
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO carDTO){
        carService.saveCar(carDTO);
        return new ResponseUtil(200, "Successfully Saved.",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@RequestParam String id){
        carService.deleteCar(id);
        return new ResponseUtil(200, "Successfully Deleted.", null);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO carDTO){
        carService.updateCar(carDTO);
        return new ResponseUtil(200, "Successfully Updated.",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable("id") String id){
        return new ResponseUtil(200, "Ok.",carService.searchCar(id));
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateCarIds(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", carService.generateCarIds());
    }

    @GetMapping(path = "/SEARCH/{reg}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRegNumberIsDuplicate(@PathVariable("reg") String reg){
        return new ResponseUtil(200, "Ok", carService.searchRegNumberIsExists(reg));
    }



            /** +++++++++++++  for sort and filter mappings ++++++++++++++ */

    @GetMapping(path = "/sortPassengerAsc/{passengerAscending}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToPassengersByAscending(@PathVariable("passengerAscending") String passengerAscending) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToPassengersByAscending());
    }

    @GetMapping(path = "/sortPassengerDsc/{passengerDscending}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToPassengersByDescending(@PathVariable("passengerDscending") String passengerDscending ) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToPassengersByDescending());
    }

    @GetMapping(path = "/sortDailyRateAsc/{dailyRateAsc}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToDailyRatePriceByAscending(@PathVariable("dailyRateAsc") String dailyRateAsc) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToDailyRatePriceByAscending());
    }

    @GetMapping(path = "/sortDailyRateDsc/{dailyRateDsc}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToDailyRatePriceByDescending(@PathVariable("dailyRateDsc") String dailyRateDsc) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToDailyRatePriceByDescending());
    }

    @GetMapping(path = "/sortMonthlyRateAsc/{monthlyRateAsc}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToMonthlyRatePriceByAscending(@PathVariable("monthlyRateAsc") String monthlyRateAsc) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToMonthlyRatePriceByAscending());
    }

    @GetMapping(path = "/sortMonthlyRateDsc/{monthlyRateDsc}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil sortAccordingToMonthlyRatePriceByDescending(@PathVariable("monthlyRateDsc") String monthlyRateDsc) {
        return new ResponseUtil(200, "Ok", carService.sortAccordingToMonthlyRatePriceByDescending());
    }

            /** +++++++++++++++ for search by properties mapping ++++++++++++++ */

    @GetMapping(path = "/schByTransmission/{type}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByTransmissionType(@PathVariable("type") String type) {
        return new ResponseUtil(200, "Ok", carService.findByTransmissionType(type));
    }

    @GetMapping(path = "/schByCarType/{type}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByType(@PathVariable("type") String type) {
        return new ResponseUtil(200, "Ok", carService.findByType(type));
    }

    @GetMapping(path = "/schByCarBrand/{brand}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByBrand(@PathVariable("brand") String brand) {
        return new ResponseUtil(200, "Ok", carService.findByBrand(brand));
    }

    @GetMapping(path = "/schByFuelType/{fuelType}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByFuelType(@PathVariable("fuelType") String fuelType) {
        return new ResponseUtil(200, "Ok", carService.findByFuelType(fuelType));
    }

    @GetMapping(path = "/schByColour/{colour}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil findByColour(@PathVariable("colour") String colour) {
        return new ResponseUtil(200, "Ok", carService.findByColour(colour));
    }


    /** +++++++++++++++ for find Available cars count++++++++++++++ */

    @GetMapping(path = "/countOfAvailableCars/{availability}")
    public ResponseUtil noOfAvailableOrReservedCars(@PathVariable("availability") String availability) {
        return new ResponseUtil(200, "Ok", carService.noOfAvailableOrReservedCars(availability));
    }


}
