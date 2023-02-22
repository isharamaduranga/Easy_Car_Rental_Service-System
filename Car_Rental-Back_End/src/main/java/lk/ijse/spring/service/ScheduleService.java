package lk.ijse.spring.service;

import lk.ijse.spring.dto.ScheduleDTO;

public interface ScheduleService {

    String generateScheduleId();

    void saveSchedule(ScheduleDTO scheduleDTO);

}
