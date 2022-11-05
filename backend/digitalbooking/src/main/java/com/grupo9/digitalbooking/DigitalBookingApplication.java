package com.grupo9.digitalbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class DigitalBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalBookingApplication.class, args);

	}

}
