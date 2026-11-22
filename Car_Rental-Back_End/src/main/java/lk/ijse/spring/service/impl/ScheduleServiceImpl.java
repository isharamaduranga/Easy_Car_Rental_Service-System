/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:20 AM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ScheduleDTO;
import lk.ijse.spring.dto.ReserveDetailsDTO;
import lk.ijse.spring.entity.ReserveCars;
import lk.ijse.spring.entity.ReserveDetails;
import lk.ijse.spring.entity.Schedule;
import lk.ijse.spring.repo.ScheduleRepo;
import lk.ijse.spring.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.LockModeType;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleRepo scheduleRepo;

    @Autowired
    ModelMapper mapper;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public String generateScheduleId() {
       return scheduleRepo.generateScheduleId();
    }

    @Override
    public void saveSchedule(ScheduleDTO scheduleDTO) {
        ReserveDetailsDTO item = scheduleDTO.getReserveDetails();
        ReserveCars key = new ReserveCars(item.getReserveId(), item.getCarId(), item.getDriverId());
        ReserveDetails details = entityManager.find(ReserveDetails.class, key, LockModeType.PESSIMISTIC_WRITE);
        if (details == null) {
            throw new IllegalArgumentException("Reservation item does not exist.");
        }
        // Older clients still post schedules after saving a reservation.
        if (scheduleRepo.existsByReserveDetails(details)) {
            return;
        }
        if (scheduleRepo.existsById(scheduleDTO.getScheduleId())) {
            throw new IllegalArgumentException(scheduleDTO.getScheduleId() + " Schedule Already Exists.");
        }
        Schedule schedule = mapper.map(scheduleDTO, Schedule.class);
        schedule.setReserveDetails(details);
        entityManager.persist(schedule);
    }

    @Override
    public List<ScheduleDTO> getAllSchedules() {
        List<Schedule> scheduleList = scheduleRepo.findAll();
        return mapper.map(scheduleList, new TypeToken<List<ScheduleDTO>>(){
        }.getType());
    }


}

