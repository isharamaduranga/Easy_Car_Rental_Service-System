package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.List;

public interface CarService {
    void saveCar(CarDTO car);

    void updateCar(CarDTO car);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    List<CarDTO> getAllCars();

    String generateCarIds();

    String searchRegNumberIsExists(String reg);

    List<CarDTO> sortAccordingToPassengersByAscending();

    List<CarDTO> sortAccordingToPassengersByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByDescending();

    List<CarDTO> sortAccordingToDailyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByAscending();

    List<CarDTO> sortAccordingToMonthlyRatePriceByDescending();
}
