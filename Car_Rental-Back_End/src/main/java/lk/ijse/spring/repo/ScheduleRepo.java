package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Schedule;
import lk.ijse.spring.entity.ReserveDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ScheduleRepo extends JpaRepository<Schedule,String> {

    @Query(value = "SELECT scheduleId FROM Schedule WHERE scheduleId LIKE 'S00-%' ORDER BY scheduleId DESC LIMIT 1", nativeQuery = true)
    String generateScheduleId();

    boolean existsByReserveDetails(ReserveDetails details);


}
