package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReserveRepo extends JpaRepository<Reserve,String> {

    @Query(value = "SELECT reserveId FROM Reserve ORDER BY reserveId DESC LIMIT 1",nativeQuery = true)
    String generateReserveId();
}
