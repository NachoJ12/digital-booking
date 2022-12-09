package com.grupo9.digitalbooking.services.impl;

import com.grupo9.digitalbooking.exception.BadRequestException;
import com.grupo9.digitalbooking.model.Image;
import com.grupo9.digitalbooking.model.Product;
import com.grupo9.digitalbooking.repository.ImageRepository;
import com.grupo9.digitalbooking.repository.ProductRepository;
import com.grupo9.digitalbooking.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    ImageRepository imageRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    @Override
    public Optional<Image> getImageById(Integer id) {
        return imageRepository.findById(id);
    }

    @Override
    public Image saveImage(Image image, Integer productId) {
        Optional<Product> optProduct = productRepository.findById(productId);

            image.setProduct(optProduct.get());
            return imageRepository.save(image);
        }

    @Override
    public Image updateImage(Image image,Integer productId) throws BadRequestException {
        Optional<Image> imageBdd = imageRepository.findById(image.getId());
        boolean productDidntChange = imageBdd.get().getProduct().getId().equals(productId);

        if (!productDidntChange) {
            throw new BadRequestException("La imagen no corresponde al producto con ID: "+ productId);
        }

        imageBdd.get().setTitle(image.getTitle());
        imageBdd.get().setUrl(image.getUrl());
        return imageRepository.save(imageBdd.get());
    }

    @Override
    public void deleteImageById(Integer id) {
        imageRepository.deleteById(id);
    }
}
