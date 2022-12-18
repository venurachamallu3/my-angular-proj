import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ProductService,private route:Router) { }
  
  products:Product[]=[{"id":0, "name": '',"description":'',"price":0}]
  ids:any[]=[]
  maximumid:number;

  ngOnInit(): void {
    this.api.getallProducts().subscribe((data)=>{
      this.products=data;
      console.log(data)
    })

    this.ids=this.products.map(product=>{
      return product.id
    })
    this.maximumid=Number(Math.max(...this.ids))
  }

  addproduct(){
    this.route.navigate(['product-add'])
  }


  showproducts(){
    this.api.getallProducts().subscribe((data)=>{
      this.products=data;
    })
  }

  deleteprod(id:number)
  {
    alert("ARE YOU WANT TO THE DELETE THE PRODUCT")
    console.log("DELETING the product with id ", id)
    this.api.deleteproductbyid(id).subscribe((data)=>{
      console.log("DELETEING cOMPLETE")
      this.showproducts();
      
    })
  }

  editproduct(id:number){
    this.route.navigate(['/product-edit',id])
  }
}
