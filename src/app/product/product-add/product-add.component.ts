import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private api:ProductService,private route : Router, private activatedroute:ActivatedRoute) { }


  product:Product[] //=[{"id":0,"name":'',"description":'',"price":0}];
  products:Product[]


  ngOnInit(): void {
    this.api.getallProducts().subscribe((data)=>{
      this.products=data;
    })
  }

  onsubmit(produpdate){
    console.log(produpdate)
    this.product=produpdate;
    console.log(this.product)
    //this.product.setvalue(produpdate)
    this.api.addproduct(produpdate).subscribe((data)=>{
      this.products=data;
    });
    this.route.navigate(['/products'])
  }

}
