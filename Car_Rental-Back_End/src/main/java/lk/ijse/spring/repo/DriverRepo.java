package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DriverRepo  extends JpaRepository<Driver,String> {

    @Query(value = "SELECT driverId FROM Driver ORDER BY driverId DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

    @Query(value = "SELECT * FROM Driver WHERE users_userId=:id", nativeQuery = true)
    Driver searchUserFromDriver(@Param("id") String id);

    @Query(value = "SELECT * FROM Driver WHERE releaseOrNot=:release ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Driver assignRandomlyDriver(@Param("release") String release);

    @Query(value = "SELECT * FROM Driver WHERE releaseOrNot=:release", nativeQuery = true)
    List<Driver> searchAvailableDriversOrReleasedDrivers(@Param("release") String release);

}
