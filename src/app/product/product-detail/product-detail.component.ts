import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private api:ProductService,private route:Router,private activatedroute:ActivatedRoute) { }
  
  product:Product[]=[{"id":0, "name": '',"description":'',"price":0}]
   
   prod:any;
   productid:any;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params)=>{
      console.log("data coming from api from single product ", params)
        this.productid=Number(params.get('id'))
        console.log(typeof this.productid)        
    })

    //this.product=this.api.getproductbyid(this.productid).subscribe()
    this.api.getallProducts().subscribe((data)=>{
           this.prod=data.find(p=>p.id===this.productid);
           console.log(this.prod)
    })

    }

    // showproduct(){
    //   this.api.getproductbyid(this.productid).subscribe((data)=>{
    //     this.product=data;
    //   })
    // }

  }
