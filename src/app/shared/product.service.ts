import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

   api="http://localhost:3000/products/";
  product:Product[]=[]
  getallProducts(){
         return this.http.get<Product[]>(this.api)
  }

  getproductbyid(id:number){
    console.log("API details in getprod by id ",this.api+id)
    return this.http.get<Product>(this.api+id)
    }

  addproduct(prod:Product){
    console.log("ADDING PRODUCT ", prod)
    return this.http.post<Product[]>(this.api, prod)
  }

  deleteproductbyid(id:number){
    return this.http.delete<Product>(this.api+id);
  }

  editproduct(prod:Product){
    return this.http.put<Product>(this.api, prod)
  }

}
