package com.grupo9.digitalbooking.controller;

import com.grupo9.digitalbooking.exception.DuplicatedValueException;
import com.grupo9.digitalbooking.model.City;
import com.grupo9.digitalbooking.model.ProductAttribute;
import com.grupo9.digitalbooking.services.ProductAttributeService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Attributes")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/attributes")
public class ProductAttributeController {

    @Autowired
    private ProductAttributeService productAttributeService;

    @GetMapping
    public ResponseEntity<List<ProductAttribute>> getAllAttributes() {
        return ResponseEntity.ok(productAttributeService.getAllProductAttribute());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductAttribute> getAttributeById(@PathVariable Integer id) {
        Optional<ProductAttribute> findAttribute = productAttributeService.getProductAttributeById(id);
        if (findAttribute.isPresent()) {
            return ResponseEntity.ok(findAttribute.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<ProductAttribute> createAttribute(@RequestBody ProductAttribute productAttribute) throws DuplicatedValueException {
        return ResponseEntity.ok(productAttributeService.saveProductAttribute(productAttribute));
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAttribute(@RequestBody ProductAttribute productAttribute) throws Exception {
        Optional<ProductAttribute> findAttribute = productAttributeService.getProductAttributeById(productAttribute.getId());
        if (findAttribute.isPresent()) {
            return ResponseEntity.ok(productAttributeService.updateProductAttribute(productAttribute));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El atributo con ID: " + productAttribute.getId() + " no se encuentra");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAttribute(@PathVariable Integer id) {
        if (productAttributeService.getProductAttributeById(id).isPresent()) {
            productAttributeService.deleteProductAttributeById(id);
            return ResponseEntity.ok("Se eliminó con éxito el atributo con ID: " + id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el atributo con ID: " + id);
    }

}
