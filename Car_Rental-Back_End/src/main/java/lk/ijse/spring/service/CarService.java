package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;

import java.util.List;

public interface CarService {
    void saveCar(CarDTO car);

    void updateCar(CarDTO car);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    List<CarDTO> getAllCars();

    String generateCarIds();

    String searchRegNumberIsExists(String reg);

     /** for sort and filter*/
    List<CarDTO> sortAccordingToPassengersByAscending();

    List<CarDTO> sortAccordingToPassengersByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByDescending();

    /** for search by prop*/
    List<CarDTO> findByTransmissionType(String type);

    List<CarDTO> findByBrand(String brand);

    List<CarDTO> findByType(String type);

    List<CarDTO> findByFuelType(String fuelType);

    List<Car> findByColour(String colour);

    /** for find Available cars*/
    int noOfAvailableOrReservedCars(String availability);

    /** for find Maintenance cars*/
    int needMaintenanceOrUnderMaintenanceCars(String maintain);
}
