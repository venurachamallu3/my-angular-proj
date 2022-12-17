import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutusComponent } from './header/aboutus/aboutus.component';
import { ContactComponent } from './header/contact/contact.component';
import { HomeComponent } from './header/home/home.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [

  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"product/:id",component:ProductDetailComponent},
  {path:"product-add",component:ProductAddComponent},
  {path:"contact-us",component:ContactComponent},
  {path:"about",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
