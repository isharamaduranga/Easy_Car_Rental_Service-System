package lk.ijse.spring.service;

import lk.ijse.spring.dto.ScheduleDTO;

import java.util.List;

public interface ScheduleService {

    String generateScheduleId();

    void saveSchedule(ScheduleDTO scheduleDTO);

    List<ScheduleDTO>getAllSchedules();

}
