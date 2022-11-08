package com.grupo9.digitalbooking.services;

import com.grupo9.digitalbooking.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Integer id);
    Product saveProduct(Product product);
    
    Product updateProduct(Product product);
    void deleteProductById(Integer id);
}
