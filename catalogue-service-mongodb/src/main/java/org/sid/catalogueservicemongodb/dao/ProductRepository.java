package org.sid.catalogueservicemongodb.dao;

import org.sid.catalogueservicemongodb.entities.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepository extends MongoRepository<Product,String> {
    public Product findByName(String name);
}
