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
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.entity.Reserve;
import lk.ijse.spring.entity.ReserveDetails;
import lk.ijse.spring.entity.Schedule;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.repo.ReserveRepo;
import lk.ijse.spring.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
@Transactional
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    private ReserveRepo reserveRepo;

    @Autowired
    private ModelMapper modelMapper;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private DriverRepo driverRepo;


    @Override
    public String generateReserveId() {
       return  reserveRepo.generateReserveId();
    }

    @Override
    public void saveReservationCars(ReserveDTO dto) {
        if (dto.getReserveDetails() == null || dto.getReserveDetails().isEmpty()) {
            throw new IllegalArgumentException("Please select at least one car.");
        }
        if (reserveRepo.existsById(dto.getReserveId())) {
            throw new IllegalArgumentException(dto.getReserveId() + " Reservation Already Exists.");
        }

        Reserve reserve = modelMapper.map(dto, Reserve.class);
        reserve.setCustomer(entityManager.getReference(Customer.class, dto.getCustomer().getCustomerId()));
        for (ReserveDetails details : reserve.getReserveDetails()) {
            details.setReserveId(reserve.getReserveId());
            details.setReserve(reserve);
            details.setCar(entityManager.getReference(Car.class, details.getCarId()));
            if ("none".equals(details.getDriverId())) {
                details.setDriver(null);
            } else {
                Driver driver = driverRepo.findById(details.getDriverId())
                        .orElseThrow(() -> new IllegalArgumentException("Unknown driver " + details.getDriverId()));
                details.setDriver(driver);
                driver.setReleaseOrNot("Not Release");
            }
        }
        entityManager.persist(reserve);

        int item = 0;
        for (ReserveDetails details : reserve.getReserveDetails()) {
            String scheduleId = reserve.getReserveId() + "-S" + (++item);
            Schedule schedule = new Schedule(scheduleId, reserve.getPickUpDate(), reserve.getPickUpTime(),
                    reserve.getReturnDate(), reserve.getReturnTime(), reserve.getPickUpVenue(),
                    reserve.getReturnVenue(), "Not Release", details);
            entityManager.persist(schedule);
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

    @Override
    public int countAllReservation() {
        return reserveRepo.countAllReservation();
    }
}
