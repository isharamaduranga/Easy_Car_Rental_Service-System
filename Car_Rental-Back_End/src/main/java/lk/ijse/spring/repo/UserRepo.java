package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users,String> {
}
