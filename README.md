                                                                                                
  ## Un projet web qui se compose de deux microservices SPRING BOOT et une partie frontend ANGULAR .
  
  ### le microservice "catalogue-service-mongodb":
   un microservice qui gère des produits catégorisés, et qui communique avec la partie front end en utilisant JWT
  ##### Il utilise comme technologies:
        -Spring boot
        -Spring security
        -Spring Data
        -MongoDB
        -JWT 
        
 <br><br> 
  
  ### le microservice "security_service" permet de :
  -Créer des nouveaux comptes utilisateurs
  -L'authentification des utilisateurs existants est la création des tokens JWT.
  ##### <u>Il utilise comme technologies:</u>
        -Spring boot
        -Spring Security
        -Https(self signed certificate)
        -Spring Data
        -Jpa
        -Hibernate
        -Spring boot starter mail(notications en cas de changement des infos d'un compte)
        -Junit et Mockito et MockMvc(les tests unitaires et les doublures).
  
   <br><br> 
   
  ### la partie front-end permet :
    -la communication avec les deux microservices a travers JWT.
    -l'authentification/gestion des rôles utilisateurs("ADMIN","USER")/stockage des tokens en local Storage.
    -La création des nouveaux comptes utilisateurs ou la modification des comptes existants.
    -La gestion des catégories(ajout/modification/suppression).
    -La gestion des produits(ajout/modification/suppression).
  
                                                                                                                                                                                           
