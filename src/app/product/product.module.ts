import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ProductModule { }
