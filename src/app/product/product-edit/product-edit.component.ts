import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private api:ProductService,private route:Router,private activatedtoute:ActivatedRoute) { }
  productid:number;
  product:Product;
  products:Product[]=[]
  ngOnInit(): void {

    this.activatedtoute.params.subscribe((data)=>{
         this.productid=data['id'];
         console.log("EDIT PRODUCT id is ",this.productid)
    })
    
     this.api.getproductbyid(this.productid).subscribe((data)=>{
      this.product=data;
      console.log("EDIT PRODUCT DETAILS ",this.product.name)

     })

  }

  onupdate(id:number,newproduct:Product){
    this.api.editproduct(id,newproduct).subscribe((data)=>{
       this.products=data;
    })
    this.route.navigate(['/products'])
  }

}
