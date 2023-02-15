package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query(value = "SELECT customerId FROM Customer ORDER BY customerId DESC LIMIT 1", nativeQuery = true)
    String generateCustomerId();

    @Query(value = "SELECT COUNT(*) FROM Customer", nativeQuery = true)
    int countRegisteredCustomers();

    @Query(value = "SELECT COUNT(*) FROM Customer WHERE registeredDate=:date", nativeQuery = true)
    int countDailyRegisteredCustomers(@Param("date") String date);

    @Query(value = "SELECT * FROM Customer WHERE users_userId=:id", nativeQuery = true)
    Customer searchUserFromCustomer(@Param("id") String id);

    @Query(value = "SELECT * FROM Customer WHERE customerNicNo=:nic", nativeQuery = true)
    Customer findCustomerToReserve(@Param("nic") String nic);

}
