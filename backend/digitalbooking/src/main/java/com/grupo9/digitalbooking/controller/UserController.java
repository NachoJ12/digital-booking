package com.grupo9.digitalbooking.controller;

import com.grupo9.digitalbooking.exception.DuplicatedValueException;
import com.grupo9.digitalbooking.model.User;
import com.grupo9.digitalbooking.model.dto.UserDto;
import com.grupo9.digitalbooking.response.ApiResponseHandler;
import com.grupo9.digitalbooking.services.UserService;
import com.grupo9.digitalbooking.services.impl.UserServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Users")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    /*@Autowired
    private UserService userService;*/

    @Autowired
    private UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable int id) {
        Optional<User> userSearch = userService.getUserById(id);
        if(userSearch.isPresent()){
            return ApiResponseHandler.generateResponse("User data retrieved successfully", HttpStatus.OK, userSearch.get());
        } else {
            return ApiResponseHandler.generateResponseError("User "+ id + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Object> createUser(@RequestBody UserDto userDto) throws DuplicatedValueException {
        return ApiResponseHandler.generateResponse("User data save successfully", HttpStatus.OK, userService.saveUser(userDto));
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateUser(@RequestBody UserDto userDto) {
        if(userDto.getId() != null && userService.getUserById(userDto.getId()).isPresent()){
            return ApiResponseHandler.generateResponse("User data update successfully", HttpStatus.OK, userService.updateUser(userDto));
        } else {
            return ApiResponseHandler.generateResponseError("User with ID: "+ userDto.getId() + " not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable int id) {
        if(userService.getUserById(id).isPresent()){
            userService.deleteUserById(id);
            return ApiResponseHandler.generateResponse(null, HttpStatus.NO_CONTENT, null);
        } else {
            return ApiResponseHandler.generateResponseError("User "+ id + " not found", HttpStatus.NOT_FOUND);
        }
    }
}

