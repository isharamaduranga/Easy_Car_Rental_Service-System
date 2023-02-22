/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/22/2023
 * Time        : 11:20 AM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ScheduleDTO;
import lk.ijse.spring.entity.Schedule;
import lk.ijse.spring.repo.ScheduleRepo;
import lk.ijse.spring.service.ScheduleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleRepo scheduleRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generateScheduleId() {
       return scheduleRepo.generateScheduleId();
    }

    @Override
    public void saveSchedule(ScheduleDTO scheduleDTO) {
        if (!scheduleRepo.existsById(scheduleDTO.getScheduleId())) {
            scheduleRepo.save(mapper.map(scheduleDTO, Schedule.class));
        }else {
            throw new RuntimeException(scheduleDTO.getScheduleId()+" Schedule Already Exists..!");
        }
    }


}

