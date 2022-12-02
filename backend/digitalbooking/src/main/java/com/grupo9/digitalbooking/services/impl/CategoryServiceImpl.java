package com.grupo9.digitalbooking.services.impl;

import com.grupo9.digitalbooking.model.Category;
import com.grupo9.digitalbooking.repository.CategoryRepository;
import com.grupo9.digitalbooking.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> listCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> searchCategory(Integer id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
}
