package org.sid.catalogueservicemongodb.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data @NoArgsConstructor @AllArgsConstructor
public class Product {

    @Id
    private String id;
    private String name;
    private double prix;
    @DBRef
    private Category category;

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", prix=" + prix +
                ", category=" + category +
                '}';
    }
}
