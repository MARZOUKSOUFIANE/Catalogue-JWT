package org.sid.catalogueservicemongodb;

import org.sid.catalogueservicemongodb.dao.CategoryRepository;
import org.sid.catalogueservicemongodb.dao.ProductRepository;
import org.sid.catalogueservicemongodb.entities.Category;
import org.sid.catalogueservicemongodb.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.stream.Stream;

@SpringBootApplication
@EnableSwagger2

public class CatalogueServiceMongodbApplication {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;

    public static void main(String[] args) {
        SpringApplication.run(CatalogueServiceMongodbApplication.class, args);
    }

    @Bean
    CommandLineRunner start(){
        return args -> {
            categoryRepository.deleteAll();
            productRepository.deleteAll();
            Stream.of("C1 ordinateur","C2 imprimante","C3 scanner")
                    .forEach(c->{
                        categoryRepository.save(new Category(c.split(" ")[0],c.split(" ")[1],new ArrayList<>()));
                    });


                        Category c1=categoryRepository.findById("C1").get();
                        Category c2=categoryRepository.findById("C2").get();
                        Category c3=categoryRepository.findById("C3").get();

                        Stream.of("produit1","produit2","produit3","produit4").
                                forEach(p->{
                                   Product prod = productRepository.save(new Product(null,p,Math.random()*2000,c1));
                                    c1.getProducts().add(prod);
                                    categoryRepository.save(c1);
                                });
                        Stream.of("produit5","produit6","produit7","produit8").
                                forEach(p->{
                                    Product prod =productRepository.save(new Product(null,p,Math.random()*2000,c2));
                                    c2.getProducts().add(prod);
                                    categoryRepository.save(c2);
                                });
                        Stream.of("produit9","produit10","produit11","produit12").
                                forEach(p->{
                                    Product prod =productRepository.save(new Product(null,p,Math.random()*2000,c3));
                                    c3.getProducts().add(prod);
                                    categoryRepository.save(c3);
                                });

            categoryRepository.findAll().forEach(c->{
                System.out.println(c.toString());
            });
            productRepository.findAll().forEach(p->{
                System.out.println(p.toString());
            });
        };

    }

}
