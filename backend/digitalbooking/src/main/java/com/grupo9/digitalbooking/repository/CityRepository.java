package com.grupo9.digitalbooking.repository;

import com.grupo9.digitalbooking.model.City;
import com.grupo9.digitalbooking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
}
