import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public host:string="http://localhost:8888";
  public products;
  public categorie;
  public mode: string="list-products";
  public url: string;


  constructor(private http:HttpClient,private catalService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {
    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let param:string=activatedRoute.snapshot.params.url;
        let url=atob(param);
        this.products=undefined;
        this.getCategory(url);
        this.getProducts(url+"/products");
        this.url=url;
      }
    })
  }

  ngOnInit() {
  }

  getProducts(url){
    this.catalService.getRessource(url).subscribe(
      data=>{
        this.products=data;
        if(this.products._embedded.products.length==0){
          this.products=undefined
          console.log(this.products)
        }
      },
      error=>{
        console.log(error)
      }
    )
  }

  private getCategory(url) {
    this.catalService.getRessource(url).subscribe(
      data=>{
        this.categorie=data;
      },err=>{console.log(err)}
    )
  }

  onNewProduct() {
    this.mode="new-product";
  }

  onSaveProduct(value) {
    this.catalService.saveProduct(value).subscribe(
      data=>{
        this.getProducts(this.url+"/products");
        this.mode="list-products";
      },err=>{
        console.log(err);
      }
    )
  }
}


