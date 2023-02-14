/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/14/2023
 * Time        : 3:06 PM
 * Year        : 2023
 */

package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.UsersDTO;
import lk.ijse.spring.entity.Users;
import lk.ijse.spring.repo.UserRepo;
import lk.ijse.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveUser(UsersDTO usersDTO) {
        if (userRepo.existsById(usersDTO.getUserId())) {
            throw new RuntimeException(usersDTO.getUserId() + "  User Already Exists..!");
        }
        userRepo.save(mapper.map(usersDTO, Users.class));
    }

    @Override
    public void updateUser(UsersDTO usersDTO) {

    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public UsersDTO searchUser(String id) {
        return null;
    }

    @Override
    public List<UsersDTO> getAllUsers() {
        return null;
    }

    @Override
    public String generateUserIds() {
        return userRepo.generateUserId();
    }
}
