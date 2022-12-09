package com.grupo9.digitalbooking.services.impl;

import com.grupo9.digitalbooking.exception.DuplicatedValueException;
import com.grupo9.digitalbooking.model.ProductAttribute;
import com.grupo9.digitalbooking.repository.ProductAttributeRepository;
import com.grupo9.digitalbooking.services.ProductAttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductAttributeServiceImpl implements ProductAttributeService {

    @Autowired
    ProductAttributeRepository productAttributeRepository;

    @Override
    public List<ProductAttribute> getAllProductAttribute() {
        return productAttributeRepository.findAll();
    }

    @Override
    public Optional<ProductAttribute> getProductAttributeById(Integer id) {
        return productAttributeRepository.findById(id);
    }

    @Override
    public ProductAttribute saveProductAttribute(ProductAttribute productAttribute) throws DuplicatedValueException {
        Optional<ProductAttribute> existIcon = productAttributeRepository.getByIcon(productAttribute.getIcon());
        if(existIcon.isPresent()){
            throw new DuplicatedValueException("Ya existe este ícono: '" + existIcon.get().getName() + "'");
        }
        return productAttributeRepository.save(productAttribute);
    }

    @Override
    public ProductAttribute updateProductAttribute(ProductAttribute productAttribute) {
        return productAttributeRepository.save(productAttribute);
    }

    @Override
    public void deleteProductAttributeById(Integer id) {
        productAttributeRepository.deleteById(id);
    }


    @Override
    public Optional<ProductAttribute> getProductAttributeByIcon(String icon) {
        return productAttributeRepository.getByIcon(icon);
    }
}
