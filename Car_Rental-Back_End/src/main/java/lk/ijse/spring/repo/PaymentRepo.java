package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query(value = "SELECT paymentId FROM Payment ORDER BY paymentId DESC LIMIT 1", nativeQuery = true)
    String generatePaymentId();

    @Query(value = "SELECT SUM(fullPayment) FROM Payment", nativeQuery = true)
    double totalIncome();

    @Query(value = "SELECT * FROM Payment WHERE paymentDate BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<Payment> findAllPaymentsBetweenDates(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "SELECT COALESCE(SUM(fullPayment), 0) FROM Payment WHERE paymentDate = DATE(NOW())", nativeQuery = true)
    double dailyIncome();

    @Query(value = "SELECT COALESCE(SUM(fullPayment), 0) FROM Payment WHERE YEAR(paymentDate) = YEAR(CURDATE()) AND WEEK(paymentDate) = WEEK(CURDATE())", nativeQuery = true)
    double weeklyIncome();

    @Query(value = "SELECT COALESCE(SUM(fullPayment), 0) FROM Payment WHERE YEAR(paymentDate) = YEAR(CURDATE()) AND MONTH(paymentDate) = MONTH(CURDATE())", nativeQuery = true)
    double monthlyIncome();

    @Query(value = "SELECT COALESCE(SUM(fullPayment), 0) FROM Payment WHERE YEAR(paymentDate) = YEAR(CURDATE())", nativeQuery = true)
    double yearlyIncome();

}
