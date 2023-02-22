package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepo extends JpaRepository<Schedule,String> {

}
