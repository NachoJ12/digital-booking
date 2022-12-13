package com.grupo9.digitalbooking.controller;

import com.grupo9.digitalbooking.exception.AuthenticationException;
import com.grupo9.digitalbooking.model.dto.AuthenticationDtoRequest;
import com.grupo9.digitalbooking.model.dto.AuthenticationDtoResponse;
import com.grupo9.digitalbooking.security.jwt.JwtUtil;
import com.grupo9.digitalbooking.services.impl.UserServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@Api(tags="Authentication")
@CrossOrigin("*")
@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserServiceImpl userServiceImpl;


    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationDtoRequest authenticationRequest) throws AuthenticationException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        }catch (BadCredentialsException e) {
            throw new AuthenticationException("Incorrect or invalid credentials");
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());
        final String jwt = jwtUtil.generateToken(userDetails);
        final int id = userServiceImpl.idUser(authenticationRequest.getEmail());
        final String name = userServiceImpl.nameUser(authenticationRequest.getEmail());
        final String lastName = userServiceImpl.lastNameUser(authenticationRequest.getEmail());
        final String email = userServiceImpl.emailUser(authenticationRequest.getEmail());
        final String city = userServiceImpl.cityUser(authenticationRequest.getEmail());
        final String role = userServiceImpl.roleUser(authenticationRequest.getEmail());

        return ResponseEntity.ok(new AuthenticationDtoResponse((jwt), id, name, lastName, email, city, role));
    }

    @RequestMapping({"/airc2c"})
    public String hello() {
        return "Welcome to Airc2c";
    }
}
