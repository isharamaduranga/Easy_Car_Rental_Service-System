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



    /** ++++++++++++++++ All Native Queries of Sorting & filter by car properties ++++++++++++++++ */

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


    /** ++++++++++++++++ All Native Queries of Search by car properties ++++++++++++++++ */

    @Query(value = "SELECT * FROM Car WHERE transmissionType LIKE :type% ", nativeQuery = true)
    List<Car> findByTransmissionType(@Param("type") String type);

    @Query(value = "SELECT * FROM Car WHERE brand LIKE :brand% ", nativeQuery = true)
    List<Car> findByBrand(@Param("brand") String brand);

    @Query(value = "SELECT * FROM Car WHERE type LIKE :type% ", nativeQuery = true)
    List<Car> findByType(@Param("type") String type);

    @Query(value = "SELECT * FROM Car WHERE fuelType LIKE :fuelType% ", nativeQuery = true)
    List<Car> findByFuelType(@Param("fuelType") String fuelType);

    @Query(value = "SELECT * FROM Car WHERE colour LIKE :colour% ", nativeQuery = true)
    List<Car> findByColour(@Param("colour") String colour);


    /** ++++++++++++++++  Native Queries of Find Available or not cars Count ++++++++++++++++ */

    @Query(value = "SELECT COUNT(*) FROM Car WHERE availableOrNot=:availability", nativeQuery = true)
    int noOfAvailableOrReservedCars(@Param("availability") String availability);
}
