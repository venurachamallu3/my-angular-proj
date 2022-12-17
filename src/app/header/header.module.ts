import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HeaderModule { }
