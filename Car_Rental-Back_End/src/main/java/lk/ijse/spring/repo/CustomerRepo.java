package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query(value = "SELECT customerId FROM Customer ORDER BY customerId DESC LIMIT 1", nativeQuery = true)
    String generateCustomerId();
}
