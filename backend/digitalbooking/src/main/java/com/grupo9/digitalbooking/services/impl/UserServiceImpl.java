package com.grupo9.digitalbooking.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalbooking.exception.DuplicatedValueException;
import com.grupo9.digitalbooking.model.Role;
import com.grupo9.digitalbooking.model.User;
import com.grupo9.digitalbooking.model.dto.UserDto;
import com.grupo9.digitalbooking.repository.RoleRepository;
import com.grupo9.digitalbooking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.*;

@Service
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private final RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ObjectMapper mapper;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserDto> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        List<UserDto> allUsersDto = new ArrayList<>();
        for (User user : allUsers)
            allUsersDto.add(mapper.convertValue(user, UserDto.class));

        return allUsersDto;
    }

    //@Override
    public Optional<User> getUserById(Integer id) { return userRepository.findById(id);}

    public User saveUser(UserDto userDto) throws DuplicatedValueException {
        Optional<User> existUser = userRepository.findByEmail(userDto.getEmail());
        if(existUser.isPresent()) {
            throw new DuplicatedValueException("Este email ya se encuentra en uso");
        }
        Role roleUser = roleRepository.findById(userDto.getRole().getId()).get();
        userDto.setRole(roleUser);
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = mapper.convertValue(userDto, User.class);
        return userRepository.save(user);
    }

    //@Override
    public User updateUser(UserDto userDto) {
        User user = mapper.convertValue(userDto, User.class);
        return userRepository.save(user);
    }

    //@Override
    public void deleteUserById(Integer id){
        Optional<User> userSearch = userRepository.findById(id);
        if(userSearch.isPresent()) {
            userRepository.deleteById(id);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).get();
        String role = user.getRole().getName();
        //System.out.println(role);

        //User user = userRepository.findByUsername(username)
        //.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(role));
        //System.out.println(authorities);

        // tuve que usar todo el import completo por una cuestion de que se me importaban dos clases con el mismo nombre (User)
        return new org.springframework.security.core.userdetails.User(email, user.getPassword(), true, true, true, true, authorities);
    }

    public int idUser(String email) {
        User user = userRepository.findByEmail(email).get();
        int id = user.getId();

        return (id);
    }

    public String nameUser(String email) {
        User user = userRepository.findByEmail(email).get();
        String nombre = user.getName();

        return (nombre);
    }

    public String lastNameUser(String email) {
        User user = userRepository.findByEmail(email).get();
        String lastName = user.getLastName();
        return (lastName);
    }

    public String emailUser(String email) {
        User user = userRepository.findByEmail(email).get();
        String eMail = user.getEmail();
        return (eMail);
    }

    public String cityUser(String email){
        User user = userRepository.findByEmail(email).get();
        String cityUser = user.getCity().getName();
        String countryUser = user.getCity().getCountry().getName();
        return (cityUser + ", " + countryUser);
    }

    public String roleUser(String email){
        User user = userRepository.findByEmail(email).get();
        String role = user.getRole().getName();
        return (role);
    }

}
