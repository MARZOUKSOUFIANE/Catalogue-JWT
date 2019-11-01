import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products;
  public totalPages;
  public pages: number[];
  private currentPage:number=0;
  private size: number=8;

  constructor(private catService:CatalogueService) { }

  ngOnInit() {
    this.getProduitsPage();
  }

  private getAllProducts() {
    this.catService.getProduitsPage(this.currentPage,this.size).subscribe(
      data=>{
        this.products=data;
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages)
      },err=>{console.log(err)}
    )
  }

  onPageProduct(i) {
    this.currentPage=i;
    this.getProduitsPage();
  }

  getProduitsPage() {
    this.catService.getProduitsPage(this.currentPage,this.size)
      .subscribe(
        data=>{
          this.products=data;
          this.totalPages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalPages)
        },
        err=>{
          console.log(err);
        }
      )
  }
}
