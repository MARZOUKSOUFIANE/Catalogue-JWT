import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string="http://localhost:8888";


  constructor(private http:HttpClient,private authService:AuthenticationService) { }

  getAllCategoriee(){
    return this.http.get(this.host+"/categories");
  }

  getRessource(url){
    return this.http.get(url);
  }

  deleteRessource(url) {
    let header=new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.delete(url,{headers:header});
  }

  saveCatal(cat) {
    let header=new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(this.host+"/categories",cat,{headers:header});
  }

  saveCatEdit(cat, url) {
    let header=new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.patch(url,cat,{headers:header});
  }

  patchProduct(url, value) {
    let header=new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.patch(url,value,{headers:header})
  }

      saveProduct(value) {
      let header=new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
      return this.http.post(this.host+"/addProduct",value,{headers:header});
  }

  getProduitsPage(currentPage, size) {
    return this.http.get(this.host+"/products?page="+currentPage+"&size="+size);
  }
}
