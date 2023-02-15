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

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchUser(@PathVariable String id){
        return new ResponseUtil(200, "Ok.",userService.searchUser(id));
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateUser(@RequestBody UsersDTO usersDTO){
        userService.updateUser(usersDTO);
        return new ResponseUtil(200, "Successfully Updated.",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteUser(@RequestParam String id){
        userService.deleteUser(id);
        return new ResponseUtil(200, "Successfully Deleted.", null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllUsers(){
        return new ResponseUtil(200, "Ok", userService.getAllUsers());
    }

    @GetMapping(params = {"test"})
    public ResponseUtil generateUserIds(@RequestParam String test) {
        return new ResponseUtil(200, "Ok", userService.generateUserIds());
    }

    @GetMapping(path ="/{password}/{username}")
    public ResponseUtil findByPasswordAndUsername(@PathVariable("password") String password, @PathVariable("username") String username){
        return new ResponseUtil(200, "Ok", userService.findByPasswordAndUsername(password,username));
    }

    @GetMapping(path ="/FIND/{uname}")
    public ResponseUtil findByUsername(@PathVariable("uname") String uname){
        return new ResponseUtil(200, "Ok", userService.findByUsername(uname));
    }
}
