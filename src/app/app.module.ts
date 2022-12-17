import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';


import { ProductService } from './shared/product.service';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
