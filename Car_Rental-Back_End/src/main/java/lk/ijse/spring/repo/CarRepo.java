package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "SELECT carId FROM Car ORDER BY carId DESC LIMIT 1", nativeQuery = true)
    String generateCarId();

    @Query(value = "SELECT registrationNo FROM Car WHERE registrationNo=:reg ", nativeQuery = true)
    String searchRegNumberIsExists(@Param("reg") String reg);
}
