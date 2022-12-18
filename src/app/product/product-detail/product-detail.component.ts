import { Component, Input, OnInit } from '@angular/core';
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
  

     //@Input() maximumid:number;
  productids:any[]
  products:Product[]=[{"id":0, "name": '',"description":'',"price":0}]
  showprevious:boolean=true;
  maximumid:number=0;
  shownext:boolean=true;

  ngOnInit(): void {
    

    // this.api.getallProducts().subscribe((data)=>{
    //   this.products=data;
    // })  
    // console.log("TOTAL PRODUCTS ",this.products)
    // this.maximumid=Math.max(...this.products.map(user => user.id)) 
    // console.log("MAXIMUM ID=",this.maximumid)
          this.maximumid=this.getmaxid();
          this.getidbyurl();
    }




    getidbyurl(){
      this.activatedroute.paramMap.subscribe((params)=>{
        console.log("data coming from api from single product ", params)
          this.productid=Number(params.get('id'))

          this.checkisfirstorlastproduct(this.productid)
          this.getproduct();
          //console.log(typeof this.productid) 

      })
    }
    

   checkisfirstorlastproduct(id:number){
    if(id===1)
        this.showprevious=false
    else(id===4)
        this.shownext=false
    console.log("MAXIMUM ID in method=",this.maximumid)
   }


    getmaxid(){
      this.api.getallProducts().subscribe((data)=>{
        this.products=data;
      })
        //this.productids=this.products.map(p=>{return p.id})
        console.log("TOTAL PRODUCTS ",this.products)
       //this.maximumid
       
       return Math.max(...this.products.map(user => user.id)) 
        //Math.max(...this.productids)
    }


    getproduct(){
      this.api.getallProducts().subscribe((data)=>{
        this.prod=data.find(p=>p.id===this.productid);
        console.log(this.prod)
      })
    }
    

    startid=1;
    curreid:number
    back(id:number){
      this.curreid=id-1
      this.route.navigate(['product',this.curreid])
      this.getidbyurl();
    }
    

    next(id:number){
      this.curreid=id+1
      this.route.navigate(['product',this.curreid])
      this.getidbyurl();

    }

  }
