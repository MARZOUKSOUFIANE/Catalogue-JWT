import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  public categories;
  public mode:string='list-cat';
  public currentCategorie;

  constructor(private catalService:CatalogueService) { }

  ngOnInit() {
    this.getAllGategories()
  }

  getAllGategories(){
    this.catalService.getAllCategoriee().
    subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err)
    })
  }

  onDeleteCat(cat) {
    let c = confirm("Etes vous sure ?")
    if (c) {
      this.catalService.deleteRessource(cat._links.self.href).subscribe(
        data => {
          this.getAllGategories();
        }, err => {
          console.log(err)
        }
      )
    }
  }

  onNewCategorcie() {
    this.mode='new-cat'
  }

  onSaveCat(value) {
    this.catalService.saveCatal(value).
      subscribe(data=>{
      this.getAllGategories()
      this.mode='list-cat'
      window.location.reload();
    },err=>{
        console.log(err)
    })
  }

  onEditCat(cat) {
    this.mode='edit-cat'
    this.catalService.getRessource(cat._links.self.href).
      subscribe(data=>{
        this.currentCategorie=data;
    },err=>{
        console.log(err);
    })
  }

  onSaveCatEdit(value) {
    this.catalService.saveCatEdit(value,this.currentCategorie._links.self.href).
      subscribe(data=>{
        this.getAllGategories();
        this.mode='list-cat'
        window.location.reload();
    })
  }
}
