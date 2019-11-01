package org.sid.catalogueservicemongodb.web;

import org.sid.catalogueservicemongodb.dao.CategoryRepository;
import org.sid.catalogueservicemongodb.dao.ProductRepository;
import org.sid.catalogueservicemongodb.entities.Category;
import org.sid.catalogueservicemongodb.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatalogueController {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;

    @PostMapping("/addProduct")
    public Product saveProduct(@RequestBody ProductForm productForm){
        Category category=categoryRepository.findByName(productForm.getCategory());
        Product product=productRepository.save(new Product(null,productForm.getName(),Double.parseDouble(productForm.getPrix()),category));
        category.getProducts().add(product);
        categoryRepository.save(category);
        return product;
    }
}
