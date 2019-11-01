import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  public products;
  public mode:string='list-products';
  public currentProduct;
  private style:string=undefined;
  private message:string=undefined;
  private categories;

  constructor(private catalService:CatalogueService) { }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
    this.style=undefined;
    this.message=undefined;
  }

  getAllCategories() {
    this.catalService.getAllCategoriee().subscribe(
      data => {
        this.categories = data;
      }, err => {
        console.log(err);
      }
    );
  }

    getAllProducts(){
      this.products=this.catalService.getRessource(this.catalService.host+"/products").subscribe(
        data=> {
          this.products = data;
        },err=>{
          console.log(err);
        })
    }

  onDeleteProduct(product) {
    this.catalService.deleteRessource(product._links.self.href).subscribe(
      data=>{
        this.getAllProducts();
      },err=>{
        console.log(err)
      }
    )
  }

  onEditProduct(product) {
    this.catalService.getRessource(product._links.self.href).subscribe(
      data=>{
        this.currentProduct=data;
      }
    )
    this.mode="edit-product"
  }

  onSaveProductEdit(value) {
    this.catalService.patchProduct(this.currentProduct._links.self.href,value).subscribe(
      data=>{
        this.getAllProducts();
        this.mode="list-products"
      },err=>{
        console.log(err);
      }
    )
  }

  onSaveProduct(value) {
    this.catalService.saveProduct(value).subscribe(
      data=>{
        this.getAllProducts();
        this.mode="list-products"
      },err=>{
        console.log(err);
      }
    )
  }

  onNewProduct() {
    this.mode="new-product"
  }
}

