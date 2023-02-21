package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "SELECT carId FROM Car ORDER BY carId DESC LIMIT 1", nativeQuery = true)
    String generateCarId();

    @Query(value = "SELECT registrationNo FROM Car WHERE registrationNo=:reg ", nativeQuery = true)
    String searchRegNumberIsExists(@Param("reg") String reg);

    @Query(value = "SELECT * FROM Car ORDER BY noOfPassengers DESC", nativeQuery = true)
    List<Car> sortAccordingToPassengersByDescending();

    @Query(value = "SELECT * FROM Car ORDER BY noOfPassengers ASC", nativeQuery = true)
    List<Car> sortAccordingToPassengersByAscending();

    @Query(value = "SELECT * FROM Car ORDER BY dailyRatePrice DESC", nativeQuery = true)
    List<Car> sortAccordingToDailyRatePriceByDescending();

    @Query(value = "SELECT * FROM Car ORDER BY dailyRatePrice ASC", nativeQuery = true)
    List<Car> sortAccordingToDailyRatePriceByAscending();

    @Query(value = "SELECT * FROM Car ORDER BY monthlyRatePrice DESC", nativeQuery = true)
    List<Car> sortAccordingToMonthlyRatePriceByDescending();

    @Query(value = "SELECT * FROM Car ORDER BY monthlyRatePrice ASC", nativeQuery = true)
    List<Car> sortAccordingToMonthlyRatePriceByAscending();
}
