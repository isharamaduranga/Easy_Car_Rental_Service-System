/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/18/2023
 * Time        : 3:53 PM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveDriver(DriverDTO driver) {
        if (!driverRepo.existsById(driver.getDriverId())){
            driverRepo.save(mapper.map(driver, Driver.class));
        }else {
            throw new RuntimeException(driver.getDriverId() + " " + "Driver Already Exists..!");
        }
    }

    @Override
    public void updateDriver(DriverDTO driver) {
        if (driverRepo.existsById(driver.getDriverId())){
            driverRepo.save(mapper.map(driver, Driver.class));
        }else {
            throw new RuntimeException(driver.getDriverId() + " " + "No Such Driver..! Please Check The Correct Id..!");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)){
            driverRepo.deleteById(id);
        }else {
            throw new RuntimeException(id + " " + "No Such Driver..! Please Check The Correct Id..!");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(id)){
            Driver driver = driverRepo.findById(id).get();
            return mapper.map(driver, DriverDTO.class);
        }else {
            throw new RuntimeException(id + " " + "No Such Driver..! Please Check The Id..!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<List<DriverDTO>>(){
        }.getType());
    }

    @Override
    public String generateDriverIds() {
        return driverRepo.generateDriverId();
    }

    @Override
    public DriverDTO searchUserFromDriver(String id) {
        Driver driver = driverRepo.searchUserFromDriver(id);
        return mapper.map(driver,DriverDTO.class);
    }

    @Override
    public DriverDTO assignRandomlyDriver(String release) {
        Driver driver = driverRepo.assignRandomlyDriver(release);
        return mapper.map(driver,DriverDTO.class);
    }


}
