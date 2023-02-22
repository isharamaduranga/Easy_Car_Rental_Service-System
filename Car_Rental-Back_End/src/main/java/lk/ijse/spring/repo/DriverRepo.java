package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DriverRepo  extends JpaRepository<Driver,String> {

    @Query(value = "SELECT driverId FROM Driver ORDER BY driverId DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

    @Query(value = "SELECT * FROM Driver WHERE users_userId=:id", nativeQuery = true)
    Driver searchUserFromDriver(@Param("id") String id);

    @Query(value = "SELECT * FROM Driver WHERE releaseOrNot=:release ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Driver assignRandomlyDriver(@Param("release") String release);
}
