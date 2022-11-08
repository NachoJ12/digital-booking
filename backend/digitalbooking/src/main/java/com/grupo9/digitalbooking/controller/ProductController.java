package com.grupo9.digitalbooking.controller;

import com.grupo9.digitalbooking.model.Product;
import com.grupo9.digitalbooking.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService prodctService;

    @GetMapping
    public ResponseEntity<List<Product>> listarProductos(){
        return ResponseEntity.ok(prodctService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> buscarProducto(@PathVariable Integer id) {
        Optional<Product> productoBuscado = prodctService.getProductById(id);
        if(productoBuscado.isPresent()) {
            return ResponseEntity.ok(productoBuscado.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Product> crearProducto(@RequestBody Product product){
        return ResponseEntity.ok(prodctService.saveProduct(product));
    }

    @PutMapping("/update")
    public ResponseEntity<?> editarProducto(@RequestBody Product product) throws Exception{
        Optional<Product> productoBuscado = prodctService.getProductById(product.getId());
        if(productoBuscado.isPresent()){
            return ResponseEntity.ok(prodctService.updateProduct(product));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El producto con ID: " + product.getId() + " no se encuentra ");
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Integer id){
        if(prodctService.getProductById(id).isPresent()){
            prodctService.deleteProductById(id);
            return ResponseEntity.ok("Se eliminó con éxito el producto con ID: " + id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el producto con ID: " + id);
    }


}



