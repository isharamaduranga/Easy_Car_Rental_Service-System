/**
 * @author : Ishara Maduarnga
 * Project Name: Easy_Car_Rental_Service-System
 * Date        : 2/14/2023
 * Time        : 4:24 PM
 * Year        : 2023
 */

package lk.ijse.spring.controller;

import lk.ijse.spring.dto.UsersDTO;
import lk.ijse.spring.service.UserService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveUser(@RequestBody UsersDTO usersDTO){
        userService.saveUser(usersDTO);
        return new ResponseUtil(200, "Successfully Registered.",null);
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateUserIds(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", userService.generateUserIds());
    }
}
