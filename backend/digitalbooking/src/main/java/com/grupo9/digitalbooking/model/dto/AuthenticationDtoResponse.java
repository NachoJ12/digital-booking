package com.grupo9.digitalbooking.model.dto;

public class AuthenticationDtoResponse {
    private final String jwt;
    private int id;
    private String name;
    private String lastName;
    private String email;
    private String city;
    private String role;


    public AuthenticationDtoResponse(String jwt, int id, String name, String lastName, String email, String city, String role) {
        this.jwt = jwt;
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
        this.role = role;
    }

    public String getJwt() {
        return jwt;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getCity() {
        return city;
    }

    public String getRole() {
        return role;
    }
}
