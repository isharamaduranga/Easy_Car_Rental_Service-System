package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReserveRepo extends JpaRepository<Reserve,String> {

    @Query(value = "SELECT reserveId FROM Reserve ORDER BY reserveId DESC LIMIT 1",nativeQuery = true)
    String generateReserveId();

    @Query(value = "UPDATE ReserveDetails SET driverId=:driverId WHERE reserveId=:reserveId AND carId=:carId", nativeQuery = true)
    void updateDriverId(@Param("driverId") String driverId, @Param("reserveId") String reserveId, @Param("carId") String carId);


}

