package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<Users,String> {
    @Query(value = "SELECT userId FROM Users ORDER BY userId DESC LIMIT 1", nativeQuery = true)
    String generateUserId();
}
