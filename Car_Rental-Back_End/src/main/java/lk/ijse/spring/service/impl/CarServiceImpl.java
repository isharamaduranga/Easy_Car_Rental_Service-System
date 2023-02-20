/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/17/2023
 * Time        : 7:19 PM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveCar(CarDTO car) {
        if (!carRepo.existsById(car.getCarId())) {
            carRepo.save(mapper.map(car, Car.class));
        }else {
            throw new RuntimeException(car.getCarId() + " " + "Car Already Exists..!");
        }
    }

    @Override
    public void updateCar(CarDTO car) {
        if (carRepo.existsById(car.getCarId())){
            carRepo.save(mapper.map(car, Car.class));
        }else {
            throw new RuntimeException(car.getCarId() + " " + "No Such Car..! Please Check The Car ..!");
        }
    }

    @Override
    public void deleteCar(String id) {
        if (carRepo.existsById(id)){
            carRepo.deleteById(id);
        }else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Correct Id..!");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (carRepo.existsById(id)){
            Car car = carRepo.findById(id).get();
            return mapper.map(car, CarDTO.class);
        }else {
            throw new RuntimeException(id + " " + "No Such Car..! Please Check The Id..!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        List<Car> carList = carRepo.findAll();
        return mapper.map(carList, new TypeToken<List<CarDTO>>(){
        }.getType());
    }

    @Override
    public String generateCarIds() {
      return carRepo.generateCarId();
    }

    @Override
    public String searchRegNumberIsExists(String reg) {
        return carRepo.searchRegNumberIsExists(reg);
    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByAscending() {
        List<Car> all = carRepo.sortAccordingToPassengersByDescending();
        return mapper.map(all, new TypeToken<List<CarDTO>>(){
        }.getType());
    }

    @Override
    public List<CarDTO> sortAccordingToPassengersByDescending() {
        List<Car> all = carRepo.sortAccordingToPassengersByAscending();
        return mapper.map(all, new TypeToken<List<CarDTO>>(){
        }.getType());
    }
}
