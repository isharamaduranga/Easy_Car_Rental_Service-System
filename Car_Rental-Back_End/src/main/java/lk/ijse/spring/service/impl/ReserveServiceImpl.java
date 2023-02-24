/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:15 AM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReserveDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Reserve;
import lk.ijse.spring.entity.ReserveDetails;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.ReserveRepo;
import lk.ijse.spring.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    private ReserveRepo reserveRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CarRepo carRepo;

    @Autowired
    private DriverRepo driverRepo;


    @Override
    public String generateReserveId() {
       return  reserveRepo.generateReserveId();
    }

    @Override
    public void saveReservationCars(ReserveDTO dto) {
        Reserve reserve = modelMapper.map(dto, Reserve.class);

        if (!reserveRepo.existsById(dto.getReserveId())) {
            if (dto.getReserveDetails().size() < 1) {
                throw new RuntimeException("No Such Cars In Reservation..!");
            }else{
                reserveRepo.save(reserve);

                for (ReserveDetails details : reserve.getReserveDetails()) {

                 /** find reserve car and Change available status using carRepo*/
                    Car foundCar = carRepo.findById(details.getCarId()).get();
                    carRepo.save(foundCar);

                 /** find reserve Driver and Change his Release or Not status using driverRepo*/

                    if (driverRepo.existsById(details.getDriverId())) {
                        Driver driver = driverRepo.findById(details.getDriverId()).get();
                        /** for customer choose a driver, change driver status */
                        driver.setReleaseOrNot("Not Release");
                        driverRepo.save(driver);

                    }else if (details.getDriverId().equals("none")){

                        /** for not choose a driver situation */
                        reserveRepo.updateDriverId("none",reserve.getReserveId(),details.getCarId());
                    }
                }
            }
        }else{
            throw new RuntimeException(dto.getReserveId()+" Reservation Already Exist !!!");
        }
    }

    @Override
    public List<ReserveDTO> getAllReservations() {
        List<Reserve> reserveList = reserveRepo.findAll();
        return modelMapper.map(reserveList, new TypeToken<List<ReserveDTO>>(){
        }.getType());

    }

    @Override
    public ReserveDTO searchReservation(String rId) {
        if (reserveRepo.existsById(rId)) {
            Reserve reserve = reserveRepo.findById(rId).get();
            return  modelMapper.map(reserve,ReserveDTO.class);
        }else {
            throw new RuntimeException(rId + " " + "No Such a Reservation..! Please Check The ID..!");
        }

    }

    @Override
    public int countDailyReservation(String date) {
        return reserveRepo.countDailyReservation(date);
    }

    @Override
    public int activeReservationPerDay(String date, String accept) {
        return reserveRepo.activeReservationPerDay(date,accept);
    }
}
