package org.sid.catalogueservicemongodb.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class ProductForm {
    private String name;
    private String prix;
    private String category;
}
