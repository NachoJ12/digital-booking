package com.grupo9.digitalbooking.repository;

import com.grupo9.digitalbooking.model.Category;
import com.grupo9.digitalbooking.model.City;
import com.grupo9.digitalbooking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> getByCategory(Category id);
    List<Product> getByCity(City id);

    @Query(value = "select P.* from product P where P.id not in (select distinct R.product_id from reservation R where (R.checkout_date >= ?1 and R.check_in_date <= ?2));", nativeQuery = true)
    List<Product> getByRangeDate(LocalDate check_in_date, LocalDate check_out_date);

    @Query(value = "select P.* from product P where P.city_id = ?1 and P.id not in (select distinct R.product_id from reservation R where (R.checkout_date >= ?2 and R.check_in_date <= ?3));", nativeQuery = true)
    List<Product> getByCityAndRangeDate(Integer city_id, LocalDate check_in_date, LocalDate check_out_date);
    @Query(value = "SELECT * FROM product ORDER BY RAND() LIMIT 6", nativeQuery = true)
    List<Product> getRandomProduct();
}

