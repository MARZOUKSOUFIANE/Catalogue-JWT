package org.sid.catalogueservicemongodb.dao;

import org.sid.catalogueservicemongodb.entities.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource()
public interface CategoryRepository extends MongoRepository<Category,String> {
    public Category findByName(String name);
}
